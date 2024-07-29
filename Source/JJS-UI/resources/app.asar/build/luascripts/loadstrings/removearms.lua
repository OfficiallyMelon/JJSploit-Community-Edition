character = game:GetService("Players").LocalPlayer.Character

--R6 Rigs
leftArm = character:FindFirstChild("Left Arm")
if leftArm then leftArm:Destroy() end
rightArm = character:FindFirstChild("Right Arm")
if rightArm then rightArm:Destroy() end

--R15 Rigs
leftUpperArm = character:FindFirstChild("LeftUpperArm")
if leftUpperArm then leftUpperArm:Destroy() end
leftLowerArm = character:FindFirstChild("LeftLowerArm")
if leftLowerArm then leftLowerArm:Destroy() end
leftFoot = character:FindFirstChild("LeftFoot")
if leftFoot then leftFoot:Destroy() end
rightUpperArm = character:FindFirstChild("RightUpperArm")
if rightUpperArm then rightUpperArm:Destroy() end
rightLowerArm = character:FindFirstChild("RightLowerArm")
if rightLowerArm then rightLowerArm:Destroy() end
rightFoot = character:FindFirstChild("RightFoot")
if rightFoot then rightFoot:Destroy() end