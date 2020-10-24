Segment

Goals

id, name, segment_id, quantity, repetition[daily/weekly/monthly], createdAt, active

1, Trie, 1, 2, daily, 1, 20201024
1, Trie, 1, 2, daily, 1, 20201025

2, Tree, 1, 5, weekly,1, 20201024
2, Tree, 1, 5, weekly,1, 20201025

GoalActivity
id, goal_id, createdAt, completedQuantity


select Goals.name ,Goals.quantity, Goals.repetition, GoalActivity.completedQuantity, GoalActivity.createdAt from GoalActivity left join Goals where createdAt > 20201024 and createdAt < 20201030 on Goals.id = GoalActivity.goal_id

visualize/?startDate=20201024&endDate=20201030


 {
	segments: [
		name: "Data Structures"
		{
			Goals: [
				{
					name: "Trie",
					completed: 1,
					total: 2,
					type: daily,
					startDate: 20201024,
					endDate: 20201024,	
				},
				{
					name: "Trie",
					completed: 1,
					total: 2,
					type: daily,
					startDate: 20201025,
					endDate: 20201025,
				},
				{
					name: "Tree",
					completed: 1,
					total: 2,
					type: weekly,
					startDate: 20201019,
					endDate: 20201025,
				},
				{
					name: "Tree",
					completed: 1,
					total: 2,
					type: weekly,
					startDate: 20201026,
					endDate: 20201101,
				},
			]
		}
	]
}

