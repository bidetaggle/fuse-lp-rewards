import { BigNumber } from 'bignumber.js'

export const ROUND_PRECISION = 4
export const MAX_PRECISION = 18

export const formatWei = (value, round = ROUND_PRECISION, decimals = 18) => new BigNumber(value).div(10 ** decimals).toFormat(round, BigNumber.ROUND_HALF_UP)
export const formatEther = (value, round = ROUND_PRECISION) => new BigNumber(value).toFormat(round, BigNumber.ROUND_HALF_UP)

export const toWei = (value, decimals = 18) => new BigNumber(value).multipliedBy(10 ** decimals).toFixed()

export const addressShortener = (address) => address ? `${address.substring(0, 6)}...${address.substring(address.length - 4, address.length)}` : ''