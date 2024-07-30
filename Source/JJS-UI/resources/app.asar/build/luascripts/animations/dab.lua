local dabr6 = "rbxassetid://18715640012"
local dabr15 = "rbxassetid://18715605072"

local animation = Instance.new("Animation")
animation.AnimationId = dabr6
danceTrack = game.Players.LocalPlayer.Character:FindFirstChildWhichIsA("Humanoid"):LoadAnimation(animation)
danceTrack.Looped = true
danceTrack:Play()