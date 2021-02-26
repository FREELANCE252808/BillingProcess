

export class ProjectMdrModel  {
	ProjectMdrID = 0
	ActualForFinal: Date
	ActualForReview: Date;
	DepartmentName = "";
	Hours = "";
	NormTypeName = "";
	ProgressAchieved ="";
	TargetForFinal: Date;
	TargetForReview: Date;
	TaskName = "";
	Weight = "";
	TaskID = 0;
}
export class ProjectProductivityModel {
	ProjectMdrID = 0
	DepartmentName = "";
	Hours = 0;
	NormTypeName = "";
	ProgressAchieved = 0;
	TaskName = "";
	Weight = "";
	TaskID = 0;
	Productivity = 0;
	BookedHrs = 0;
	EarnedVowd = 0;
}
