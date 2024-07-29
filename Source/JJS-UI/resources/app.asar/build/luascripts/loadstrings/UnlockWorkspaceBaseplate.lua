function Traverse(instance)
	for i,v in pairs (instance:GetChildren()) do
		--Unlocks if its a brick
		if v:IsA("BasePart") then
			v.Locked = false
		end
		--So we can traverse through all children
		if #v:GetChildren() > 0 then
			Traverse(v)
		end
	end
end

Traverse(workspace)