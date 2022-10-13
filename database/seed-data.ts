interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
	description: string
    createAt: number 
    status: string
}
export const seedData: SeedData = {
	entries: [
		{
			createAt: Date.now(),
			description: 'algo pending',
			status: 'pending'
		},
		{
			createAt: Date.now(),
			description: 'algo in-progress',
			status: 'in-progress'
		},
		{
			createAt: Date.now(),
			description: 'algo finished',
			status: 'finished'
		}
	]
}
