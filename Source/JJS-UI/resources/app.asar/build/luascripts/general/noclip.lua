_G.NoClip = not _G.NoClip
LocalP = game.Players.LocalPlayer
local CoreGui = game:GetService("StarterGui")
function clip()
if LocalP.Character.Humanoid.RigType == Enum.HumanoidRigType.R6 then
    LocalP.Character.Head.CanCollide = _G.NoClip 
    LocalP.Character.Torso.CanCollide = _G.NoClip
else
    LocalP.Character.Head.CanCollide = _G.NoClip 
    LocalP.Character.LowerTorso.CanCollide = _G.NoClip
    LocalP.Character.UpperTorso.CanCollide = _G.NoClip
end
end
CoreGui:SetCore("SendNotification", {
	Title = "WRD";
	Text = "NoClip CanCollide " .. tostring(_G.NoClip);
	Duration = 1.5;
})
clip()