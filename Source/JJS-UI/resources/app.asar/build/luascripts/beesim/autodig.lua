_G.farming = not _G.farming

local player = game:GetService("Players").LocalPlayer
local pollenTool = player.Character:FindFirstChildOfClass("Tool") or player.Backpack:FindFirstChildOfClass("Tool")
if pollenTool==nil or pollenTool:FindFirstChild("ClickEvent")==nil then
	AutoDigActive = false
	AutoDig.BackgroundColor3 = Color3.new(0.1, 0.1, 0.1)
	error("Tool not found")
end
pollenTool.Parent = player.Character
while _G.farming do
	wait(0.1)
	pollenTool.ClickEvent:FireServer(CFrame.new())
end