import { getIntervals, getPWMValue } from '../encoder'

describe('Encoder functions', () => {
	const totalPositions = 256
	const numOfIntervals = 4

	describe('getIntervals', () => {
		const positions = [5, 70, 250, 300]
		const expected = [1, 2, 4, 4]

		it('should get the right intervals for the positions', () => {
			positions.forEach((position, idx) => {
				expect(getIntervals(position, numOfIntervals, totalPositions)).toBe(expected[idx])
			})
		})
	})

	describe('getPWMValue', () => {
		const intervals = [1, 2, 3, 4]
		const expected = [64, 128, 192, 256]

		it('should get the right value for the intervals', () => {
			intervals.forEach((interval, idx) => {
				expect(getPWMValue(interval, numOfIntervals, totalPositions)).toBe(expected[idx])
			})
		})
	})

})
