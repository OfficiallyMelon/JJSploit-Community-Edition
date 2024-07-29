local backpack = game:GetService("Players").LocalPlayer.Backpack
local names = {[2] = "Grab", [3] = "Clone", [4] = "Hammer"}

for i = 2, 4 do
    local tool = Instance.new("HopperBin")
    tool.Name = names[i]
    tool.BinType = i
    tool.Parent = backpack
end