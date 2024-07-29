player = game:GetService("Players").LocalPlayer

--Remove BodyVelocity to remove float
if player.Character.HumanoidRootPart:FindFirstChild("WRDBodyVelocity") then
    player.Character.HumanoidRootPart.WRDBodyVelocity:Destroy()
--Insert BodyVelocity to add float
else
    local bodyVelocity = Instance.new("BodyVelocity")
    --So we know what specific instance to remove when toggle off
    bodyVelocity.Name = "WRDBodyVelocity"
    bodyVelocity.Parent = player.Character.HumanoidRootPart
end