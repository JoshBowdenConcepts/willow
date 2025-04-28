import { oneThroughFourSpacingClass } from './boxUtils'

describe('oneThroughFourSpacingClass', () => {
	it('returns 4 classes for single spacing', () => {
		expect(oneThroughFourSpacingClass(100)).toEqual([
			'pt_100',
			'pb_100',
			'pl_100',
			'pr_100',
		])
	})

	it('returns 2 classes for two spacing values', () => {
		expect(oneThroughFourSpacingClass([100, 200])).toEqual([
			'pv_100',
			'ph_200',
		])
	})

	it('returns 3 classes for three spacing values', () => {
		expect(oneThroughFourSpacingClass([100, 200, 300])).toEqual([
			'pt_100',
			'ph_200',
			'pb_300',
		])
	})

	it('returns 4 classes for four spacing values', () => {
		expect(oneThroughFourSpacingClass([100, 200, 300, 400])).toEqual([
			'pt_100',
			'pr_200',
			'pb_300',
			'pl_400',
		])
	})

	it('handles "auto" keyword correctly', () => {
		expect(oneThroughFourSpacingClass('auto')).toEqual([
			'auto',
			'auto',
			'auto',
			'auto',
		])

		expect(oneThroughFourSpacingClass(['auto', 200, 300])).toEqual([
			'auto',
			'ph_200',
			'pb_300',
		])
	})

	it('returns empty array if spacing is not provided', () => {
		expect(oneThroughFourSpacingClass()).toEqual([])
	})
})
