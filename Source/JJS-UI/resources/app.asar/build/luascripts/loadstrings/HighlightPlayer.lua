targetPlayerName = ""

players = game:GetService("Players")
targetPlayer = players:FindFirstChild(targetPlayerName) or players.LocalPlayer
character = targetPlayer.Character

selectionBox = Instance.new("SelectionBox")
selectionBox.Parent = character.HumanoidRootPart
selectionBox.Adornee = character.HumanoidRootPart