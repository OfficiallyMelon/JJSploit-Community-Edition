game:GetService('RunService').Stepped:connect(function()
   for i,v in pairs (game:GetService("Players").LocalPlayer.Character:GetChildren()) do
        if v:IsA("BasePart") then 
            v.CanCollide = false
        end
   end
end)
b = Instance.new("RocketPropulsion")
b.Parent = game:GetService("Players").LocalPlayer.Character.HumanoidRootPart
b.Target = game:GetService("Players"):FindFirstChild(_G.MagnetizeToTarget).Character.HumanoidRootPart
b.TurnP = 20000
b.MaxThrust = 20000
b.MaxSpeed = 1000
b.ThrustP = 13000
b:Fire()