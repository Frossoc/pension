// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.3/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.3/contracts/token/ERC20/utils/SafeERC20.sol";

contract TransferUSDCBasic {
    using SafeERC20 for IERC20;

    string public GRETTING = "Hackathon win";

    error NotEnoughBalanceForFees(uint256 currentBalance, uint256 calculatedFees);
    error NotEnoughBalanceUsdcForTransfer(uint256 currentBalance);
    error NothingToWithdraw();

    address public owner;
    address public beneficiary;
    address public heir;

    uint256 public poolBalance;
    uint256 public stakingBalance;
    uint256 public investmentBalance;
    uint256 public lendingBalance;

    IRouterClient private immutable ccipRouter;
    IERC20 private immutable linkToken;
    IERC20 private immutable usdcToken;

    uint64 private immutable destinationChainSelector;

    event UsdcTransferred(
        bytes32 messageId,
        uint64 destinationChainSelector,
        address receiver,
        uint256 amount,
        uint256 ccipFee
    );

    event Deposit(uint256 amount);
    event Claimed(address indexed claimant, uint256 amount);
    event HeirSet(address indexed newHeir);

    constructor(
        address _ccipRouterAddress,
        address _linkTokenAddress,
        address _usdcTokenAddress,
        uint64 _destinationChainSelector
    ) {
        owner = msg.sender;
        ccipRouter = IRouterClient(_ccipRouterAddress);
        linkToken = IERC20(_linkTokenAddress);
        usdcToken = IERC20(_usdcTokenAddress);
        destinationChainSelector = _destinationChainSelector;
    }

    function transferUsdcToSepolia(
        address _receiver,
        uint256 _amount
    )
        external
        returns (bytes32 messageId)
    {
        Client.EVMTokenAmount[] memory tokenAmounts = new Client.EVMTokenAmount[](1);
        Client.EVMTokenAmount memory tokenAmount = Client.EVMTokenAmount({
            token: address(usdcToken),
            amount: _amount
        });
        tokenAmounts[0] = tokenAmount;

        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(_receiver),
            data: "",
            tokenAmounts: tokenAmounts,
            extraArgs: Client._argsToBytes(
                Client.EVMExtraArgsV1({gasLimit: 0})
            ),
            feeToken: address(linkToken)
        });

        uint256 ccipFee = ccipRouter.getFee(
            destinationChainSelector,
            message
        );

        if (ccipFee > linkToken.balanceOf(address(this)))
            revert NotEnoughBalanceForFees(linkToken.balanceOf(address(this)), ccipFee);
        linkToken.approve(address(ccipRouter), ccipFee);

        if (_amount > usdcToken.balanceOf(msg.sender))
            revert NotEnoughBalanceUsdcForTransfer(usdcToken.balanceOf(msg.sender));
        usdcToken.safeTransferFrom(msg.sender, address(this), _amount);
        usdcToken.approve(address(ccipRouter), _amount);

        // Send CCIP Message
        messageId = ccipRouter.ccipSend(destinationChainSelector, message);

        emit UsdcTransferred(
            messageId,
            destinationChainSelector,
            _receiver,
            _amount,
            ccipFee
        );
    }

    function deposit(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        
        // Transfer USDC from sender to this contract
        usdcToken.safeTransferFrom(msg.sender, address(this), amount);

        // Distribute the funds according to the specified rules
        uint256 tenPercent = (amount * 10) / 100;
        uint256 fivePercent = (amount * 5) / 100;
        uint256 twentyFivePercent = (amount * 25) / 100;

        usdcToken.safeTransfer(beneficiary, tenPercent);
        usdcToken.safeTransfer(owner, fivePercent);

        poolBalance += tenPercent;
        stakingBalance += twentyFivePercent;
        investmentBalance += twentyFivePercent;
        lendingBalance += twentyFivePercent;

        emit Deposit(amount);
    }

    function claimPoolFunds() external {
        require(msg.sender == beneficiary || msg.sender == heir, "Not authorized");
        uint256 amount = poolBalance;
        poolBalance = 0;
        usdcToken.safeTransfer(msg.sender, amount);
        emit Claimed(msg.sender, amount);
    }

    function setHeir(address newHeir) external {
        require(msg.sender == owner, "Only owner can set heir");
        heir = newHeir;
        emit HeirSet(newHeir);
    }

    function stake() external {
        require(msg.sender == owner, "Only owner can stake");
        // Logic to stake the funds
    }

    function invest() external {
        require(msg.sender == owner, "Only owner can invest");
        // Logic to invest the funds in SP500
    }

    function lend() external {
        require(msg.sender == owner, "Only owner can lend");
        // Logic to lend the funds
    }

    function claimStakingRewards() external {
        require(msg.sender == owner, "Only owner can claim staking rewards");
        // Logic to claim staking rewards and add to poolBalance
    }

    function claimInvestmentReturns() external {
        require(msg.sender == owner, "Only owner can claim investment returns");
        // Logic to claim investment returns and add to poolBalance
    }

    function claimLoanReturns() external {
        require(msg.sender == owner, "Only owner can claim loan returns");
        // Logic to claim loan returns and add to poolBalance
    }

    function allowanceUsdc() public view returns (uint256 usdcAmount) {
        usdcAmount = usdcToken.allowance(msg.sender, address(this));
    }

    function balancesOf(address account) public view returns (uint256 linkBalance, uint256 usdcBalance) {
        linkBalance = linkToken.balanceOf(account);
        usdcBalance = usdcToken.balanceOf(account);
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function withdrawToken(
        address _beneficiary,
        address _token
    ) public onlyOwner {
        uint256 amount = IERC20(_token).balanceOf(address(this));
        if (amount == 0) revert NothingToWithdraw();
        IERC20(_token).transfer(_beneficiary, amount);
    }
}
