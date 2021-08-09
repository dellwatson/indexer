import { EventLog } from 'web3-core'

export function partialEventLog(overrides: Partial<EventLog>): EventLog {
  return {
    event: 'test',
    address: '0x123',
    logIndex: 0,
    transactionIndex: 0,
    blockHash: '0x123',
    transactionHash: '0x123',
    blockNumber: 1234,
    returnValues: {},
    ...overrides,
  }
}
