for _, basepart in game.Players.LocalPlayer.Character:GetChildren do
    if basepart:IsA("BasePart") or basepart:IsA("Decal") then
        if basepart.Transparency > 0.5 then
            basepart.Transparency = 0
        else
            basepart.Transparency = 1
        end
    end
end