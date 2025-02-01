function printToTerminal({
	date,
	i,
	performanceOfRouteComp,
	inputToken,
	outputToken,
	tokenA,
	tokenB,
	route,
	simulatedProfit,
}) {
	try {
		if (cache.ui.allowClear) {
			console.clear();
			console.log("-------------------------------------------");
			console.log(`TIMESTAMP: ${date.toLocaleString()}`);
			console.log(`Iteration: ${i} | ${cache.iterationPerMinute.value} i/min`);
			console.log(`RPC: ${cache.config.rpc[0]}`);
			console.log(`LOOKUP (ROUTE): ${performanceOfRouteComp.toFixed()} ms`);
			console.log(`STARTED: ${moment(cache.startTime).fromNow()}`);
			console.log(
				`MIN INTERVAL: ${cache.config.minInterval} ms QUEUE: ${
					Object.keys(cache.queue).length
				}/${cache.queueThrottle}`
			);
			console.log("-------------------------------------------");
			console.log(
				`IN: ${toDecimal(String(route.inAmount), inputToken.decimals)} ${
					inputToken.symbol
				}`
			);
			console.log(
				`OUT: ${toDecimal(String(route.outAmount), outputToken.decimals)} ${
					outputToken.symbol
				}`
			);
			console.log(
				`PROFIT: ${simulatedProfit.toFixed(2)}% (Min: ${
					cache.config.minPercProfit
				}%)`
			);
			console.log(`SLIPPAGE: ${cache.config.slippage} BPS`);
			console.log(`W/UNWRAP SOL: ${cache.wrapUnwrapSOL ? "on" : "off"}`);
			console.log("-------------------------------------------");
			console.log(
				`CURRENT BALANCE: ${toDecimal(
					cache.currentBalance.tokenA,
					tokenA.decimals
				)} ${tokenA.symbol}`
			);
			console.log(
				`LAST BALANCE: ${toDecimal(
					cache.lastBalance.tokenA,
					tokenA.decimals
				)} ${tokenA.symbol}`
			);
			console.log(
				`INIT BALANCE: ${toDecimal(
					cache.initialBalance.tokenA,
					tokenA.decimals
				)} ${tokenA.symbol}`
			);
			console.log(`CURRENT PROFIT: ${cache.currentProfit.tokenA.toFixed(2)}%`);
			console.log("-------------------------------------------");
			console.log(
				`CURRENT BALANCE: ${toDecimal(
					cache.currentBalance.tokenB,
					tokenB.decimals
				)} ${tokenB.symbol}`
			);
			console.log(
				`LAST BALANCE: ${toDecimal(
					cache.lastBalance.tokenB,
					tokenB.decimals
				)} ${tokenB.symbol}`
			);
			console.log(
				`INIT BALANCE: ${toDecimal(
					cache.initialBalance.tokenB,
					tokenB.decimals
				)} ${tokenB.symbol}`
			);
			console.log(`CURRENT PROFIT: ${cache.currentProfit.tokenB.toFixed(2)}%`);
			console.log("-------------------------------------------");
		}
	} catch (error) {
		console.error("Error printing to console:", error);
	}
}

module.exports = printToTerminal;
