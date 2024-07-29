-- Change the name of the Humanoid in the character
local character = game.Players.LocalPlayer.Character
local humanoid = character:FindFirstChildOfClass("Humanoid")
humanoid.Name = "TempHumanoid"

-- Clone the Humanoid and reparent it with the correct name
local clonedHumanoid = humanoid:Clone()
clonedHumanoid.Parent = character
clonedHumanoid.Name = "Humanoid"

-- Wait for a short period to ensure the clone operation is complete
wait(0.1)

-- Remove the temporary Humanoid
character:FindFirstChild("TempHumanoid"):Destroy()

-- Set the camera subject to the character
game.Workspace.CurrentCamera.CameraSubject = character

-- Disable and then re-enable the Animate script to refresh animations
character.Animate.Disabled = true
wait(0.1)
character.Animate.Disabled = false

-- Set the Humanoid's display distance type to None
local updatedHumanoid = character:FindFirstChildOfClass("Humanoid")
updatedHumanoid.DisplayDistanceType = Enum.HumanoidDisplayDistanceType.None
