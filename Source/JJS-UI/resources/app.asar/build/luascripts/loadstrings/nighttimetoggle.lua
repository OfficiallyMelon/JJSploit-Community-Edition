lighting = game:GetService("Lighting")
if lighting.TimeOfDay == "00:00:00" then
    lighting.TimeOfDay = 11
else 
    lighting.TimeOfDay = 24
end