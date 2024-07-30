for _, v in game.Players.LocalPlayer.Character:GetChildren() do
    if v:IsA("BasePart") or v:IsA("MeshPart") then
        v.Size = Vector3.new(v.Size.X, v.Size.Y, 0.001)
    end
end
