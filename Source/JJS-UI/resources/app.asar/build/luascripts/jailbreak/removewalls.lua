a = game:GetService('Workspace') 
a.Banks:GetChildren()[1].Lasers:Remove() 
a.Banks:GetChildren()[1].Door:Destroy() 

b = a.Jewelrys:GetChildren()[1] 
b.FloorLasers:Remove() 
b.Cameras:Remove() 

a.Cells:Remove() 
a.Doors:ClearAllChildren() 
a.EscapeRoutes:ClearAllChildren() 

b.WindowEntry.LaserWindow:Destroy() 
for i = 1, 4 do 
	b.Model.BarbedWire:Destroy() 
end 
b.Lasers: Destroy()