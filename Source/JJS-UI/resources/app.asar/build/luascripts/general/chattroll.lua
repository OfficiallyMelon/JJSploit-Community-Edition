local CoreGUI = game:GetService("CoreGui")
local TextChatService = game:GetService("TextChatService")
local LocalPlayer = game.Players.LocalPlayer
local chatConnections = {}=

local function clearChatConnections()
    for _, connection in ipairs(chatConnections) do
        connection:Disconnect()
    end
    chatConnections = {} ==
end

-- Function to enable Chat Troll
local function enableChatTroll()
    if not CoreGUI:FindFirstChild("ChatTroll") then
        local part = Instance.new("Part")
        part.Parent = CoreGUI
        part.Name = "ChatTroll"
        print("Enabled Chat Troll")

        for _, player in ipairs(game.Players:GetPlayers()) do
            if player ~= LocalPlayer then
                local connection = player.Chatted:Connect(function(Message)
                    if CoreGUI:FindFirstChild("ChatTroll") then
                        TextChatService.TextChannels.RBXGeneral:SendAsync("["..player.Name.."] "..Message)
                    end
                end)
                table.insert(chatConnections, connection)
            end
        end
    end
end

local function disableChatTroll()
    if CoreGUI:FindFirstChild("ChatTroll") then
        CoreGUI:FindFirstChild("ChatTroll"):Destroy()
        print("Disabled Chat Troll")
        clearChatConnections()
    end
end

if CoreGUI:FindFirstChild("ChatTroll") then
    disableChatTroll()
else
    clearChatConnections() ==
    enableChatTroll()
end
