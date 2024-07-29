if _G.WRDClickTeleport == nil then
	_G.WRDClickTeleport = true
	
	local player = game:GetService("Players").LocalPlayer
	local UserInputService = game:GetService("UserInputService")
	 --Wanted to avoid using mouse instance, but UIS^ is very tedious to get mouse hit position
	local mouse = player:GetMouse()

	--Waits until the player's mouse is found
	repeat wait() until mouse
	
	UserInputService.InputBegan:Connect(function(input, gameProcessed)
		if input.UserInputType == Enum.UserInputType.MouseButton1 then
			--Only click teleport if the toggle is enabled
			if _G.WRDClickTeleport and UserInputService:IsKeyDown(Enum.KeyCode.LeftControl) then
				player.Character:MoveTo(Vector3.new(mouse.Hit.x, mouse.Hit.y, mouse.Hit.z)) 
			end
		end
	end)
--Just toggle instead of re-executing the script
else
	_G.WRDClickTeleport = not _G.WRDClickTeleport
	--Notify
	if _G.WRDClickTeleport then
		game.StarterGui:SetCore("SendNotification", {Title="WeAreDevs.net"; Text="Click teleport enabled"; Duration=5;})
	else
		game.StarterGui:SetCore("SendNotification", {Title="WeAreDevs.net"; Text="Click teleport disabled"; Duration=5;})
	end
end