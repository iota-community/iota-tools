import loadDB from "./db";
import { isBefore, format } from "date-fns";
import conv from "./converter";

const tickers = () => {};

tickers.getData = async () => {
  const db = await loadDB();
  const tickers = await db.child("ticker").once("value");
  const array = tickers.val();
  return array;
};

tickers.getCrumbs = async () => {
  const data = await tickers.getData();
  const crumbs = [];
  crumbs.push(formatCrumb("M", data.iota, "", data.bitcoin));
  crumbs.push(formatCrumb("M", data.iota, "", data.bitcoin, "USD"));
  return crumbs;
};

tickers.getMarketCap = async () => {
  const data = await tickers.getData();
  return data.iota.price_usd * 2779530283277761;
};

tickers.sigFigs = (n, sig) => {
  var mult = Math.pow(10, sig - Math.floor(Math.log(n) / Math.LN10) - 1);
  return Math.round(n * mult) / mult;
};

const formatCrumb = (prefix1, coin1, prefix2, coin2, item) => {
  var unit = "price_btc";
  if (item) unit = "price_usd";
  var primary = prefix1.toLowerCase() + coin1.symbol.slice(1);
  var secondary = item || prefix2.toLowerCase() + coin2.symbol;
  var price;
  if (!item) {
    price = tickers.sigFigs(
      conv(coin1.price_btc, prefix1) / conv(coin2[unit], prefix2),
      4
    );
  } else {
    price = tickers.sigFigs(
      conv(coin1.price_btc, prefix1) * conv(coin2[unit], prefix2),
      4
    );
  }
  const data = {
    primary: primary,
    secondary: secondary,
    price: price
  };
  return data;
};

export default tickers;
