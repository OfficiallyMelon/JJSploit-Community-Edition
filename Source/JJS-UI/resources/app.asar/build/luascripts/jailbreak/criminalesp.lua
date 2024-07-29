_G.jailbreakcrimesp = not _G.jailbreakcrimesp

while _G.jailbreakcrimesp do 
	for i,v in pairs(game.Teams.Criminal:GetPlayers()) do 
		p=game:GetService('Players') 
		e=Instance.new('BoxHandleAdornment') 
		e.Color3=Color3.new(255,0,0) 
		e.Size=Vector3.new(2,1.6,1) 
		e.ZIndex=1 
		e.AlwaysOnTop=true 
		e.Parent=game:GetService('Workspace') 
		e.Adornee=v.Character.UpperTorso 
	end 
	wait(5) 
	e:Destroy() 
end