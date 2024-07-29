local Character = game.Players.LocalPlayer.Character
scriptRunning = true
local CoreGui = game:GetService("CoreGui")

if CoreGui:FindFirstChild("NoclipValue") then
    scriptRunning = false
    if CoreGui:FindFirstChild("NoclipValue").Value then
        CoreGui:FindFirstChild("NoclipValue").Value = false
        print("NoClip Enabled")
    else
        CoreGui:FindFirstChild("NoclipValue").Value = true
        print("NoClip Disabled")
    end
end

if scriptRunning then
Clip = false
	wait(0.1)
	local function NoclipLoop()
		if Clip == false and Character ~= nil then
			for _, child in pairs(Character:GetDescendants()) do
				if child:IsA("BasePart") and child.CanCollide == true then
					child.CanCollide = false
				end
			end
		end
	end
	--Noclipping = RunService.Stepped:Connect(NoclipLoop)

    -- To disable flying, call ToggleFly(false)
if not CoreGui:FindFirstChild("NoclipValue") then
    local FlyValue = Instance.new("BoolValue")
    FlyValue.Parent = CoreGui
    FlyValue.Name = "NoclipValue"
    FlyValue.Value = false
end

game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid").Died:Connect(function()
    CoreGui:FindFirstChild("NoclipValue"):Destroy()
    script:Destroy()
end)

CoreGui:FindFirstChild("NoclipValue"):GetPropertyChangedSignal("Value"):Connect(function()
    Clip = CoreGui:FindFirstChild("NoclipValue").Value
    print(tostring(CoreGui:FindFirstChild("NoclipValue").Value))
end)

end