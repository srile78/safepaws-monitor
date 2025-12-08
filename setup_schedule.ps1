$ScriptPath = Join-Path $PSScriptRoot "fetch_recalls.py"
$PythonPath = "python" # Assumes python is in PATH. Modify if necessary.
$TaskName = "PetFoodRecallUpdater"

# Create the action
$Action = New-ScheduledTaskAction -Execute $PythonPath -Argument $ScriptPath -WorkingDirectory $PSScriptRoot

# Create the trigger (Daily at 2 AM)
$Trigger = New-ScheduledTaskTrigger -Daily -At 2am

# Register the task
Register-ScheduledTask -Action $Action -Trigger $Trigger -TaskName $TaskName -Description "Updates pet food recall data daily" -User "SYSTEM" -RunLevel Highest

Write-Host "Task '$TaskName' created successfully."
