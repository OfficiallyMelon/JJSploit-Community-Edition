character = game:GetService("Players").LocalPlayer.Character
rootJoint = character.HumanoidRootPart.RootJoint

rightLeg = character:FindFirstChild("Right Leg") or character:FindFirstChild("LowerRightLeg")
rootJoint.Part0 = character["Right Leg"]
rootJoint.Part1 = character.HumanoidRootPart