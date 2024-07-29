_G.jailbreakpolesp = not _G.jailbreakpolesp

while _G.jailbreakpolesp do 
	for i, v in pairs(game.Teams.Police:GetPlayers()) do 
		p = game:GetService('Players') 
		e = Instance.new('BoxHandleAdornment') 
		e.Color3 = Color3.new(0,0,1) 
		e.Size = Vector3.new(2,1.6,1) 
		e.ZIndex = 1 
		e.AlwaysOnTop = true 
		e.Parent = game:GetService('Workspace') 
		e.Adornee = v.Character.UpperTorso 
	end wait(5) 
	e:Destroy() 
end