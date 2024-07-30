(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
       111: function (e, t, n) {
          "use strict";
          n.d(t, "e", function () {
             return a
          }), n.d(t, "d", function () {
             return r
          }), n.d(t, "a", function () {
             return i
          }), n.d(t, "c", function () {
             return l
          }), n.d(t, "f", function () {
             return o
          }), n.d(t, "b", function () {
             return s
          });
          const a = e => ({
                type: "SET_SETTING",
                settings: e
             }),
             r = e => ({
                type: "SET_SERVER_MESSAGE",
                serverMessage: e
             }),
             i = e => ({
                type: "SET_FORM_VIEW",
                form: e
             }),
             l = e => ({
                type: "SET_MESSAGE",
                message: e
             }),
             o = e => ({
                type: "SET_TAB_VIEW",
                tab: e
             }),
             s = e => ({
                type: "SET_LASTLUASCRIPT",
                lastLuaScript: e
             })
       },
       178: function (e, t, n) {
          "use strict";
          var a = n(13),
             r = n.n(a),
             i = n(79),
             l = n(111);
          t.a = Object(i.b)(function (e) {
             return {
                tab: e.GeneralForm.tab
             }
          })(class extends a.Component {
             constructor(...e) {
                super(...e), this.setTab_Buttons = (() => {
                   (0, this.props.dispatch)(Object(l.f)("buttons"))
                }), this.setTab_Lua = (() => {
                   (0, this.props.dispatch)(Object(l.f)("luaexecutor"))
                }), this.setTab_LuaC = (() => {
                   (0, this.props.dispatch)(Object(l.f)("luacexecutor"))
                }), this.setTab_Hub = (() => {
                    (0, this.props.dispatch)(Object(l.f)("scripthub"))
                 })
             }
             render() {
                return r.a.createElement("div", {
                   id: "generalnav"
                }, r.a.createElement("p", {
                   className: "generalnavtab",
                   onClick: this.setTab_Buttons
                }, "Buttons"), r.a.createElement("p", {
                   className: "generalnavtab",
                   onClick: this.setTab_Lua
                }, "Lua"),r.a.createElement("p", {
                    className: "generalnavtab",
                    onClick: this.setTab_Hub
                 }, "Script Hub"), r.a.createElement("style", null, "\n            #generalnav{\n                display: flex;\n            }\n\n            .generalnavtab{\n                flex: 1;\n\t\t\t\ttext-align: center;\n\t\t\t\tbackground-color: #171717;\n\t\t\t\t-webkit-transition: background-color 1000ms linear;\n\t\t\t\t-ms-transition: background-color 300ms linear;\n\t\t\t\ttransition: background-color 300ms linear;\n\t\t\t\tborder-bottom: 1px solid #131418;\n\t\t\t\tpadding: 5px 10px;\n\t\t\t\tfont-weight: 400px;\n                text-decoration: none;\n                cursor: pointer;\n            }\n\n            .generalnavtab:nth-child(2){\n                border-left: 1px solid black;\n                /*border-right: 1px solid black;*/\n            }\n            "))
             }
          })
       },
       216: function (e, t, n) {
          "use strict";
          (function (e) {
             var a = n(13),
                r = n.n(a),
                i = n(79),
                l = n(230),
                o = n.n(l),
                s = n(231),
                c = n.n(s),
                p = n(232),
                m = n.n(p);
             class u extends a.Component {
                constructor(e) {
                   super(e), this.state = {
                      icon: "#"
                   }
                }
                componentWillMount() {
                   switch (this.props.type) {
                      case "YouTube":
                         this.setState({
                            icon: o.a,
                            bgColor: "#fe4c40"
                         });
                         break;
                      case "Discord":
                         this.setState({
                            icon: c.a,
                            bgColor: "#7289da"
                         });
                         break;
                      case "Website":
                         this.setState({
                            icon: m.a,
                            bgColor: "#3498db"
                         })
                   }
                }
                render() {
                   return r.a.createElement(r.a.Fragment, null, r.a.createElement("a", {
                      className: "pomoButton less-round",
                      style: {
                         backgroundColor: this.state.bgColor
                      },
                      href: this.props.link,
                      target: "_blank",
                      rel: "noopener noreferrer"
                   }, r.a.createElement("img", {
                      src: this.state.icon,
                      alt: ""
                   }), r.a.createElement("p", {
                      className: "text-clouds"
                   }, this.props.text)), r.a.createElement("style", null, "\n                .pomoButton{\n                    max-width: 180px;\n                    width: 100%;\n                    height: 45px;\n                    background-color: #fe4c40;\n                    text-align: center;\n                    display: flex;\n                    justify-content: center;\n                    margin-right: 6px;\n                    text-decoration: none;\n                    display: flex;\n                    align-items: center;\n                    font-size: 14px;\n                    padding: 6px 8px;\n                }\n\n                .pomoButton:last-of-type{\n                    margin: 0;\n                }\n\n                .pomoButton img{\n                    margin-right: 5px;\n                    height: 25px;\n                    width: 25px;\n                    margin-right: 8px;\n                }\n                "))
                }
             }
             t.a = Object(i.b)(function (e) {
                const t = e.Settings;
                return {
                   topMost: t.topMost,
                   serverMessage: t.serverMessage
                }
             })(class extends a.Component {
                constructor(...t) {
                   super(...t), this.Attach = (() => {
                      e.ipcRenderer.send("message", {
                         action: "attach"
                      })
                   })
                }
                render() {
                   return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                      id: "split1",
                      className: "section"
                   }, r.a.createElement("div", {
                      id: "attachcontainer"
                   }, r.a.createElement("h1", null, "You must attach JJSploit to a game first"), r.a.createElement("button", {
                      className: "btnAttach less-round",
                      onClick: this.Attach
                   }, "Attach"), r.a.createElement("p", {
                      id: "ServerMessage"
                   }, this.props.serverMessage || "Loading server message...")), r.a.createElement("div", {
                      id: "ytbuttons"
                   }, r.a.createElement(u, {
                      link: "https://wearedevs.net",
                      text: "Community",
                      type: "Website"
                   }), r.a.createElement(u, {
                      link: "https://www.youtube.com/c/Omnidev_",
                      text: "Learn Code",
                      type: "YouTube"
                   }), r.a.createElement(u, {
                      link: "https://www.youtube.com/channel/UC3YNONzSHPW12m3AT48fMHw",
                      text: "Exploit Tutorials",
                      type: "YouTube"
                   }))), r.a.createElement("br", null), r.a.createElement("div", {
                      className: "section lessgapchildren"
                   }, r.a.createElement("p", null, "Notes:"), r.a.createElement("p", null, "*Use a ", r.a.createElement("a", {
                      href: "https://www.xvinlink.com/?a_fid=wearedevs",
                      target: "_blank",
                      rel: "noopener noreferrer"
                   }, "VPN"), " if JJSploit is failing to connect to the internet for assets or updates."), r.a.createElement("p", null, r.a.createElement("a", {
                      href: "https://wearedevs.net/forum/t/23563",
                      target: "_blank",
                      rel: "noopener noreferrer"
                   }, "*Disable your anti-virus/firewall"), " if JJSploit's important files are breaking or deleting! Due to the nature of exploits(Obfuscation, game manipulation, etc), they're falsely marked as viruses/malware."), r.a.createElement("p", null, "*", r.a.createElement("a", {
                      href: "https://aka.ms/vs/16/release/vc_redist.x86.exe",
                      target: "_blank",
                      rel: "noopener noreferrer"
                   }, "Download VC++ x86"), " if the DLL Injector is not working"), r.a.createElement("p", null, "*If it says its patched, you must wait for the creators to update! This could be a few hours or a few days if there are serious complications."), r.a.createElement("p", null, "*You can ask for help at ", r.a.createElement("a", {
                      href: "https://wearedevs.net",
                      target: "_blank",
                      rel: "noopener noreferrer"
                   }, "https://wearedevs.net")), r.a.createElement("p", null, "*")), r.a.createElement("br", null), r.a.createElement("div", {
                      id: "split2",
                      className: "section"
                   }, r.a.createElement("p", {
                      style: {
                         textAlign: "center"
                      }
                   }, "Powered by ", r.a.createElement("a", {
                      href: "https://discord.gg/Celery",
                      target: "_blank",
                      rel: "noopener noreferrer"
                   }, "Celery"))), r.a.createElement("style", null, "\n            .section{\n                padding: 12px;\n            }\n\n            #split1{\n                height: 100%;\n                display: flex;\n                flex-direction: column;\n            }\n\n            #attachcontainer{\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                flex: 1;\n            }\n\n            #split2 ul li{\n                margin-left: 16px;\n            }\n\n            #split1 h1{\n                text-align: center; \n                font-size: 22px;\n                margin-bottom: 10px;\n                padding: 0;\n            }\n\n            .btnAttach{\n                max-width: 160px;\n                width: 100%;\n                height: 40px;\n                border: none;\n                background-color: #171717;\n                cursor: pointer;\n                font-size: 16px;\n                padding: 12px 0;\n            }\n\n            #ServerMessage{\n                text-align: center; \n                width: 100%; \n                max-height: 70px;\n                overflow-y: auto;\n                font-size: 15px;\n                padding: 12px 0;\n            }\n\n            #ytbuttons{\n                display: flex;\n                justify-content: space-around;\n                width: 100%;\n            }\n            "))
                }
             })
          }).call(this, n(146))
       },
       217: function (e, t, n) {
          "use strict";
          (function (e) {
             var a = n(13),
                r = n.n(a),
                i = n(178);
             class l extends a.Component {
                constructor(...t) {
                   super(...t), this.SendMessage = (() => {
                      var t = Object.keys(this.props.message)[0];
                      e.ipcRenderer.send("message", {
                         action: t,
                         data: this.props.message[t]
                      })
                   })
                }
                render() {
                   return r.a.createElement("button", {
                      className: "quickcommand",
                      onClick: this.SendMessage
                   }, r.a.createElement("p", null, this.props.text), r.a.createElement("style", null, "\n            .quickcommand{\n\t\t\t\tpadding: 5px 10px;\n\t\t\t\ttext-align: center;\n\t\t\t\tbackground-color: #171717;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tmargin-top: 3px;\n                cursor: pointer;\n                width: 110px;\n                margin: 5px;\n                border: none;\n                border-radius: var(--less-round);\n            }\n            "))
                }
             }
             class o extends a.Component {
                constructor(t) {
                   super(t), this.HandleChange = (t => {
                      var n = t.target.value;
                      switch (this.props.command) {
                         case "walkspeed":
                            e.ipcRenderer.send("message", {
                               action: "luascript",
                               script: 'game:GetService("Players").LocalPlayer.Character.Humanoid.WalkSpeed = '.concat(n)
                            });
                            break;
                         case "jumppower":
                            e.ipcRenderer.send("message", {
                               action: "luascript",
                               script: 'game:GetService("Players").LocalPlayer.Character.Humanoid.JumpPower = '.concat(n)
                            });
                            break;
                         default:
                            console.log("NumValCommand executed with no command.")
                      }
                   }), this.state = {
                      value: 16
                   }
                }
                render() {
                   return r.a.createElement("div", null, r.a.createElement("p", null, this.props.text), r.a.createElement("select", {
                      onChange: this.HandleChange
                   }, r.a.createElement("option", null, "16"), r.a.createElement("option", null, "18"), r.a.createElement("option", null, "20"), r.a.createElement("option", null, "22"), r.a.createElement("option", null, "24"), r.a.createElement("option", null, "26"), r.a.createElement("option", null, "28"), r.a.createElement("option", null, "30"), r.a.createElement("option", null, "40"), r.a.createElement("option", null, "60"), r.a.createElement("option", null, "80"), r.a.createElement("option", null, "100"), r.a.createElement("option", null, "120"), r.a.createElement("option", null, "140"), r.a.createElement("option", null, "160"), r.a.createElement("option", null, "200"), r.a.createElement("option", null, "300"), r.a.createElement("option", null, "400"), r.a.createElement("option", null, "500")))
                }
             }
             class s extends a.Component {
                constructor(t) {
                   super(t), this.HandleChange = (e => {
                      this.setState({
                         username: e.target.value
                      })
                   }), this.CheckKeyPress = (t => {
                      "Enter" === t.key && (e.ipcRenderer.send("message", {
                         action: "luascript",
                         script: '_G.MagnetizeToTarget = "'.concat(this.state.username, '"')
                      }), e.ipcRenderer.send("message", {
                         action: "storedluascript",
                         data: {
                            filename: "general/magnetizeto.lua"
                         }
                      }))
                   }), this.state = {
                      username: ""
                   }
                }
                render() {
                   return r.a.createElement("div", null, r.a.createElement("p", null, "Magnetize to"), r.a.createElement("input", {
                      type: "text",
                      placeholder: "Exact username",
                      onChange: this.HandleChange,
                      onKeyPress: this.CheckKeyPress
                   }))
                }
             }
             class c extends a.Component {
                constructor(t) {
                   super(t), this.HandleXChange = (e => {
                      this.setState({
                         x: e.target.value
                      })
                   }), this.HandleYChange = (e => {
                      this.setState({
                         y: e.target.value
                      })
                   }), this.HandleZChange = (e => {
                      this.setState({
                         z: e.target.value
                      })
                   }), this.Execute = (() => {
                      e.ipcRenderer.send("message", {
                         action: "luascript",
                         script: 'game:GetService("Players").LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new('.concat(this.state.x, ", ").concat(this.state.y, ", ").concat(this.state.z, ")")
                      })
                   }), this.state = {
                      x: 0,
                      y: 0,
                      z: 0
                   }
                }
                render() {
                   return r.a.createElement("div", {
                      id: "tpv3com"
                   }, r.a.createElement("p", null, "Teleport To Vector3(X,Y,Z)"), r.a.createElement("input", {
                      type: "number",
                      placeholder: "x",
                      defaultValue: "0",
                      onChange: this.HandleXChange
                   }), r.a.createElement("input", {
                      type: "number",
                      placeholder: "y",
                      defaultValue: "0",
                      onChange: this.HandleYChange
                   }), r.a.createElement("input", {
                      type: "number",
                      placeholder: "z",
                      defaultValue: "0",
                      onChange: this.HandleZChange
                   }), r.a.createElement("button", {
                      onClick: this.Execute
                   }, "Go"))
                }
             }
             class LoadScriptFromURL extends a.Component {
                constructor(t) {
                   super(t), this.HandleChange = (e => {
                      this.setState({
                         LoadURL: e.target.value
                      })
                   }), this.CheckKeyPress = (t => {
                      "Enter" === t.key && (e.ipcRenderer.send("message", {
                         action: "luascript",
                         script: 'loadstring(game:HttpGet("'.concat(this.state.LoadURL, '"))')
                      }), e.ipcRenderer.send("message", {
                         action: "storedluascript",
                         data: {
                            filename: ""
                         }
                      }))
                   }), this.state = {
                      LoadURL: ""
                   }
                }
                render() {
                   return r.a.createElement("div", null, r.a.createElement("p", null, "Load script from URl"), r.a.createElement("input", {
                      type: "text",
                      placeholder: "Raw Script URL",
                      onChange: this.HandleChange,
                      onKeyPress: this.CheckKeyPress
                   }))
                }
             }
             t.a = class extends a.Component {
                constructor(...e) {
                   super(...e), this.scrollToESP = (() => {
                      var e = this.refs.esp;
                      e.parentNode.scrollTop = e.offsetTop
                   }), this.scrollToAimbot = (() => {
                      var e = this.refs.aimbot;
                      e.parentNode.scrollTop = e.offsetTop
                   })
                }
                render() {
                   return r.a.createElement(r.a.Fragment, null, r.a.createElement(i.a, null), r.a.createElement("div", {
                      className: "section"
                   }, r.a.createElement("h2", {
                      style: {
                         margin: 0
                      }
                   }, "Common"), r.a.createElement("div", {
                      className: "quickcommands"
                   }, r.a.createElement(l, {
                      text: "ctrl+click tp",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/ClickTeleport.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Infinite Jump",
                      message: {
                         storedluascript: {
                            filename: "general/infinitejump.lua"
                         }
                      }
                   }), r.a.createElement("button", {
                      className: "quickcommand",
                      onClick: this.scrollToESP
                   }, "ESP"), r.a.createElement("button", {
                      className: "quickcommand",
                      onClick: this.scrollToAimbot
                   }, "Aimbot"), r.a.createElement(l, {
                      text: "Fly",
                      message: {
                         storedluascript: {
                            filename: "general/fly.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "God mode",
                      message: {
                         storedluascript: {
                            filename: "general/god.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Noclip",
                      message: {
                         storedluascript: {
                            filename: "general/noclip.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Flashlight",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/HumanFlashlight.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "No Legs",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/RemoveLegs.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Float",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/FloatScript.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "High Hips",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/HighHips.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Btools",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/btools.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Toggle Night",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/nighttimetoggle.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Suicide",
                      message: {
                         action: "suicide",
                         data: {
                            filename: "loadstrings/suicide.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Limp",
                      message: {
                         action: "storedluascript",
                         data: {
                            filename: "loadstrings/limpcharacter.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Blockhead",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/Blockhead.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Paper Thin",
                      message: {
                         storedluascript: {
                            filename: "general/paperthin.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Unlock Parts",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/unlockparts.lua"
                         }
                      }
                   }))), r.a.createElement("div", {
                      id: "specgencoms",
                      className: "section"
                   }, r.a.createElement(o, {
                      text: "Walk Speed",
                      command: "walkspeed"
                   }), r.a.createElement(o, {
                      text: "Jump Power",
                      command: "jumppower"
                   }), r.a.createElement(s, null), r.a.createElement(c, null)), r.a.createElement("br", null), r.a.createElement("div", {
                      ref: "esp",
                      className: "section"
                   }, r.a.createElement("h2", null, "ESP Toggles"), r.a.createElement("div", {
                      className: "quickcommands"
                   }, r.a.createElement(l, {
                      text: "ESP",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/wrdesp.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Boxes",
                      message: {
                         storedluascript: {
                            filename: "esp/boxes.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Team Check",
                      message: {
                         storedluascript: {
                            filename: "esp/teamcheck.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Lines",
                      message: {
                         storedluascript: {
                            filename: "esp/lines.lua"
                         }
                      }
                   }), )), r.a.createElement("br", null), r.a.createElement("div", {
                      ref: "aimbot",
                      className: "section"
                   }, r.a.createElement("h2", null, "Aimbot Toggles"), r.a.createElement("div", {
                      className: "quickcommands"
                   }, r.a.createElement(l, {
                      text: "Aimbot | Broken",
                      message: {
                         storedluascript: {
                            filename: "general/aimbot.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Team Check",
                      message: {
                         storedluascript: {
                            filename: "aimbot/teamcheck.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Wallcheck",
                      message: {
                         storedluascript: {
                            filename: "aimbot/wallcheck.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Bypass",
                      message: {
                         storedluascript: {
                            filename: "aimbot/bypass.lua"
                         }
                      }
                   }))), r.a.createElement("br", null), r.a.createElement("div", {
                      className: "section"
                   }, r.a.createElement("h2", null, "Client Appearance"), r.a.createElement("div", {
                      className: "quickcommands"
                   }, r.a.createElement(l, {
                      text: "Fire",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/fire.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Highlight",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/HighlightPlayer.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Smoke",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/smoke.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Sparkles",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/sparkles.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "No Arms",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/removearms.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Invisible",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/ClientInvisibility.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Forcefield",
                      message: {
                         storedluascript: {
                            filename: "loadstrings/forcefield.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "4D Character",
                      message: {
                         storedluascript: {
                            filename: "general/multidimensionalcharacter.lua"
                         }
                      }
                   }))), r.a.createElement("br", null), r.a.createElement("div", {
                      className: "section"
                   }, r.a.createElement("h2", null, "Animations"), r.a.createElement("div", {
                      className: "quickcommands"
                   }, r.a.createElement(l, {
                      text: "Dab",
                      message: {
                         storedluascript: {
                            filename: "animations/dab.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Jump Land",
                      message: {
                         storedluascript: {
                            filename: "animations/jumpland.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Levitate",
                      message: {
                         storedluascript: {
                            filename: "animations/levitate.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Walkthrough",
                      message: {
                         storedluascript: {
                            filename: "animations/walkthrough.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Energize GUI",
                      message: {
                         storedluascript: {
                            filename: "animations/energizegui.lua"
                         }
                      }
                   }))), r.a.createElement("br", null), r.a.createElement("div", {
                      className: "section"
                   }, r.a.createElement("h2", null, "Etc"), r.a.createElement("div", {
                      className: "quickcommands"
                   }, r.a.createElement(l, {
                      text: "TP Tool",
                      message: {
                         storedluascript: {
                            filename: "general/tptool.lua"
                         }
                      }
                   }))), r.a.createElement("style", null, "\n            .section{\n                padding: 12px;\n            }\n\n            .section h2{\n                font-weight: 400;\n                margin-bottom: 12px;\n            }\n\n            .quickcommands{\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: center;\n            }\n\n            #specgencoms{\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: center;\n            }\n\n            #specgencoms > div{\n                width: 210px;\n                text-align: center;\n                margin-bottom: 12px;\n                margin-right: 12px;\n            }\n\n            #specgencoms > div > p:nth-child(1){\n                color: gray;\n                margin-bottom: 5px;\n            }\n\n            #specgencoms input, #specgencoms select{\n                padding: 8px;\n                width: 100%;\n                max-width: 180px;\n                margin-right: 5px;\n                background-color: #171717;\n                border-radius: var(--less-round);\n                border: none;\n            }\n\n            #specgencoms input:focus, #specgencoms select:focus {\n                outline: none;\n            }\n\n            #specgencoms button{\n                border: 1px solid #ccc;\n                padding: 8px;\n            }\n\n            #tpv3com input{\n                width: 40px;\n                display: inline-block;\n                margin-right: 5px;\n            }\n\n            #tpv3com input::-webkit-outer-spin-button,\n            #tpv3com input::-webkit-inner-spin-button {\n                -webkit-appearance: none;\n            }\n\n            #tpv3com button{\n                padding: 8px;\n                margin-right: 5px;\n                background-color: #171717;\n                border-radius: var(--less-round);\n                border: none;\n            }\n\n            h2{\n                text-align: center;\n            }\n            "))
                }
             }
          }).call(this, n(146))
       },
       226: function (e, t, n) {
          "use strict";
          (function (e) {
             var a = n(13),
                r = n.n(a),
                i = n(79),
                l = n(227),
                o = n(228),
                s = n(237),
                c = n(111);
             t.a = Object(i.b)()(class extends a.Component {
                constructor(...e) {
                   super(...e), this.handleMessage = ((e, t) => {
                      var n = this.props.dispatch;
                      if ("string" === typeof t) switch (t) {
                         case "hideMessageBox":
                            n(Object(c.c)({
                               subject: null,
                               text: null
                            }))
                      } else "object" === typeof t && ("topMost" in t ? n(Object(c.e)({
                         topMost: t.topMost
                      })) : "version" in t ? n(Object(c.e)({
                         version: t.version
                      })) : "showMessageBox" in t ? n(Object(c.c)(t.showMessageBox)) : "serverMessage" in t ? n(Object(c.d)({
                         serverMessage: t.serverMessage
                      })) : "changePage" in t && n(Object(c.a)(t.changePage)))
                   })
                }
                componentDidMount() {
                   e.ipcRenderer.on("message", this.handleMessage)
                }
                componentWillUnmount() {
                   e.ipcRenderer.removeListener("message", this.handleMessage)
                }
                render() {
                   return r.a.createElement("div", {
                      style: {
                         height: "100vh",
                         display: "flex",
                         flexDirection: "column"
                      }
                   }, r.a.createElement(l.a, null), r.a.createElement(o.a, null), r.a.createElement(s.a, null))
                }
             })
          }).call(this, n(146))
       },
       227: function (e, t, n) {
          "use strict";
          var a = n(13),
             r = n.n(a),
             i = n(79),
             l = n(111);
          t.a = Object(i.b)(function (e) {
             const t = e.MessageBox;
             return {
                subject: t.subject,
                text: t.text
             }
          })(class extends a.Component {
             constructor(...e) {
                super(...e), this.HideMessage = (() => {
                   (0, this.props.dispatch)(Object(l.c)({
                      subject: null,
                      text: null
                   }))
                })
             }
             render() {
                var e = {
                   messageBox: {
                      display: this.props.subject && this.props.subject.length > 0 ? "flex" : "none"
                   },
                   error: {
                      color: "red"
                   }
                };
                return r.a.createElement("div", {
                   id: "msgBoxModal",
                   style: e.messageBox
                }, r.a.createElement("div", {
                   className: "msgcontent"
                }, r.a.createElement("p", {
                   className: "msgsubject",
                   style: "error" === this.props.subject ? e.error : {}
                }, this.props.subject), r.a.createElement("p", {
                   className: "msgBoxText"
                }, this.props.text), r.a.createElement("br", null), r.a.createElement("button", {
                   onClick: this.HideMessage
                }, "Okay")), r.a.createElement("style", null, "\n            #msgBoxModal{\n                height: 100vh;\n                width: 100vw;\n                background-color: rgba(0,0,0,0.5);\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                position: absolute;\n                padding: 12px;\n                z-index: 1;\n            }\n\n            .msgcontent{\n                background-color: #333333;\n                padding: 12px;\n                min-width: 270px;\n                border-radius: var(--less-round);\n                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n            }\n\n            .msgsubject{\n                margin-bottom: 12px;\n                text-align: center;\n            }\n\n            .msgBoxText{\n                text-align: center;\n            }\n\n            .msgcontent button{\n                background-color: #171717;\n                border: none;\n                padding: 5px 32px;\n                text-align: center;\n                text-decoration: none;\n                display: block;\n                font-size: 15px;\n                margin: auto;\n                border-radius: var(--less-round);\n            }\n            "))
             }
          })
       },
       228: function (e, t, n) {
          "use strict";
          (function (e) {
             var a = n(13),
                r = n.n(a),
                i = n(79);
             t.a = Object(i.b)(function (e) {
                const t = e.Settings;
                return {
                   topMost: t.topMost,
                   version: t.version
                }
             })(class extends a.Component {
                constructor(...t) {
                   super(...t), this.ToggleTopMost = (() => {
                      e.ipcRenderer.send("message", {
                         action: "toggletopwindow"
                      })
                   }), this.FixRoblox = (() => {
                      e.ipcRenderer.send("message", {
                         action: "fixroblox"
                      })
                   }), this.ExitApp = (() => {
                      e.ipcRenderer.send("message", {
                         action: "exitapp"
                      })
                   }), this.OpenWebsite = (() => {
                      window.open("https://wearedevs.net", "_blank")
                   })
                }
                render() {
                   var e = {
                      topMost: {
                         backgroundColor: this.props.topMost ? "#27ae60" : "rgba(255,255,255,0.1)"
                      }
                   };
                   return r.a.createElement("nav", {
                      id: "windowTopBar"
                   }, r.a.createElement("h1", null, "JJSploit v", this.props.version, " by", r.a.createElement("a", {
                      id: "site",
                      href: "https://discord.gg/Celery",
                      target: "_blank",
                      rel: "noopener noreferrer"
                   }, " wearedevs.net")), r.a.createElement("div", {
                      id: "actions"
                   }, r.a.createElement("button", {
                      id: "fixroblox",
                      onClick: this.FixRoblox
                   }, "Fix Roblox"), r.a.createElement("button", {
                      id: "alwaysontop",
                      style: e.topMost,
                      onClick: this.ToggleTopMost
                   }, "Top Most"), r.a.createElement("button", {
                      id: "exit",
                      onClick: this.ExitApp
                   }, "X")), r.a.createElement("style", null, "\n            nav{\n                background-color: #131418;\n                display: flex;\n                align-items: center;\n                z-index: 2;\n                -webkit-app-region: drag\n            }\n\n            h1{\n                font-weight: 400;\n                margin: 0;\n                padding: 4px;\n                font-size: 14px;\n                font-weight: 300;\n            }\n\n            #site{\n                -webkit-app-region: no-drag;\n                text-decoration: none;\n                font-size: 14px;\n                cursor: pointer;\n            }\n\n            #site:hover{\n                color: #3498DB;\n            }\n\n            #actions{\n                display: flex;\n                margin-left: auto;\n            }\n\n            #actions button{\n                border: 0;\n                margin-left: 2px;\n                background-color: rgba(255,255,255,0.1);\n                -webkit-app-region: no-drag;\n            }\n\n            #fixroblox{\n                cursor: pointer;\n                border: 0;\n                padding: 4px;\n                font-weight: 500;\n            }\n\n            #fixroblox:hover{\n                background-color: rgba(255,255,255,0.2);\n            }\n\n            #actions #alwaysontop{\n                cursor: pointer;\n                border: 0;\n                padding: 4px;\n                background-color: #27AE60;\n                font-weight: 500;\n            }\n\n            #actions #alwaysontop:hover{\n                color: #ECF0F1;\n            }\n\n            #exit{\n                background-color: transparent;\n                cursor: pointer;\n                width: 30px;\n                height: 30px;\n                text-align: center;\n                line-height: 200%;\n            }\n\n            #exit:hover{\n                background-color: red;\n                color: white;\n            }\n            "))
                }
             })
          }).call(this, n(146))
       },
       229: function (e, t, n) {
          "use strict";
          (function (e) {
             var a = n(13),
                r = n.n(a);
             t.a = class extends a.Component {
                constructor(...t) {
                   super(...t), this.Agree = (() => {
                      e.ipcRenderer.send("message", {
                         action: "agreementagree"
                      })
                   })
                }
                render() {
                   return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                      id: "introcon"
                   }, r.a.createElement("div", {
                      id: "introinfo",
                      class: "lessgapchildren"
                   }, r.a.createElement("h2", null, "Information"), r.a.createElement("hr", null), r.a.createElement("p", null, "*You can check for updates at ", r.a.createElement("a", {
                      href: "https://wearedevs.net/",
                      target: "_blank",
                      rel: "noopener noreferrer"
                   }, "https://wearedevs.net/"), ". If anything is broken, please report it on the website's forum! You may need to disable firewalls/antiviruses to use this program. Due to the nature of exploitation, JJSploit will be incorrectly flagged as malicious. Failing to disable firewalls may break the software, to which you would need to reinstall."), r.a.createElement("p", null, "*We do not act with any abusive experience. There are no crypto miners, no adware, and no viruses. We only ask that you check out the two YouTube channels which you will see after this."), r.a.createElement("p", null, "*Feel free to show this off on YouTube! No permission is required."), r.a.createElement("h2", null, "Privacy"), r.a.createElement("hr", null), r.a.createElement("p", null, "Data is collected, but your identity is anonymous. We do not collect any personally identifying information. We only collect information such as error events and what commands are used. Information is used only to improve user experience. Additional network requests are made such as updates."), r.a.createElement("h2", null, "Advertisements"), r.a.createElement("hr", null), r.a.createElement("p", null, "Advertisements may be found throughout the interface."), r.a.createElement("p", null, "If you purchase a product through a link from this interface, we may receive a share of the purchase. These are known as affiliate links.")), r.a.createElement("button", {
                      onClick: this.Agree
                   }, "Understood")), r.a.createElement("style", null, "\n            #introcon{\n                padding: 14px;\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n            }\n\n            #introinfo{\n                flex: 1;\n                overflow: auto;\n                font-size: 13px;\n            }\n\n            #introcon button{\n                margin: auto;\n                margin-top: 12px;\n                padding: 8px 12px;\n                width: 250px;\n                display: block;\n                border: none;\n                background-color: #4CAF50;\n                border-radius: var(--less-round);\n                color: white;\n                font-weight: 400;\n                font-size: 16px;\n            }\n            "))
                }
             }
          }).call(this, n(146))
       },
       230: function (e, t) {
          e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIvGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wNy0yNFQwNzowNjoyNC0wNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNy0yNFQwNzowNjo1MC0wNTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDctMjRUMDc6MDY6NTAtMDU6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY0ODlmYjliLTMyMzMtOTk0Ni1hZmNmLTQ4ZDVjMjFhNzViYiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjEzZDMxYjc1LWY1NzMtNjM0Yi05ZGQwLWZiY2Y5ZDdkN2RiZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjA1NzY4NjBiLWM1NmMtZjI0NC1iYTNhLWIyYmMzYzM4MTE4YyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNTc2ODYwYi1jNTZjLWYyNDQtYmEzYS1iMmJjM2MzODExOGMiIHN0RXZ0OndoZW49IjIwMTktMDctMjRUMDc6MDY6MjQtMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWU5NGJlM2UtNzdmOC04ZTQ1LTgwZDQtYzUzYWZmNWM3ZGFjIiBzdEV2dDp3aGVuPSIyMDE5LTA3LTI0VDA3OjA2OjUwLTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY0ODlmYjliLTMyMzMtOTk0Ni1hZmNmLTQ4ZDVjMjFhNzViYiIgc3RFdnQ6d2hlbj0iMjAxOS0wNy0yNFQwNzowNjo1MC0wNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphZTk0YmUzZS03N2Y4LThlNDUtODBkNC1jNTNhZmY1YzdkYWMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDU3Njg2MGItYzU2Yy1mMjQ0LWJhM2EtYjJiYzNjMzgxMThjIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDU3Njg2MGItYzU2Yy1mMjQ0LWJhM2EtYjJiYzNjMzgxMThjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iWWPJwAAAmVJREFUaN7t2V9oTmEcB/DH68ZKJLHQ5kbJxe4kWkpKhLJSoiZqrYhMDEVES0Pb1PzPSikpt5QsNxQWN7YLzaiZxJ1o3AgfF+e8+VNr0XnP67ydX/1uTqfnvJ86z/M+5/kGhErokENySA7JIRUHmYw5mI/FWIn12IptaMUBHEU7TqELZ3EOF+I+F1/riu9pxxHsxx40YzPWYTkWYh6qMelfINPQhB7cwzO8xSfp1jd8wGsMoBdnsAlTx4M0Y9T/X6PYORbksOxV55+QRbJbK36F3M0wpK8IqcIX2a5pAUtkv1YFNFYAZHvAvgqAHA/xEpZMvX/P0FA5IFcDriU23MePVFXR2Bih0qvegNuJDjl9erQYTplCZ2dakL6Ah4kOOXduBCl2XR23bpUaMhDwNNEha2t/hxS7oYHBwVJBhgJepAIpdksLo4nvS0cChlOFhBDNo8uXk3zqm4A3qUOKXVtLT08ST31XXkihQFcX378nAnmVOqRQoK0tCcBvr9bLVCEbNzIyUpLJ3p8KpL6eBw9Ktfw+D3hUUkhNDVeulPoPsT/gTqJDVldHgAkTOHiQL6l8sz0KuJ7c2cZohFi9muFhKVZvwOlEt/GPH5dtG3+gUj6stlQAZEfA0gqArCkeUn/NOGRm8YDufoYRA345aVyWYcgGfxxid2QQcd0YscLeDM2Xk8YJemZjF27gSbzN/1DGH/w5/mbqx00cEqVnfxW9TcQMUQS2CKvid7IpxraKcpVi7NYR7xS6cR4XcSnui/G17vieTpzAMT8juN2isKkRa1GPBZhlnPgtT3VzSA7JITmkLP0DaL/afOhwplEAAAAASUVORK5CYII="
       },
       231: function (e, t) {
          e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ3SURBVEhL7ZbNSxRhHMd3NA0Klkh78VJQEkQSJp22Q0EJhlBBCNmlvdilLv0BEmF/QVDhISqiokMFSYfM8Nill11KQno5BIGEpVEaUbl9vs/LNj27sy7YnvQDn3nmmec3z2/mmWeemdQSi5dCoVCHGTyHebyLTa65BNrSeAfHcBB3Y51rLiFyZRGCVezDAdyC5/EGrsYObMV1uBLFDH7Et/gMJ7EHT+J77McHURSZjstC0ga8jL/xJh7F6ziF1TKNt7AXL+EvVB/LXZpSaDyOSjqKOVwoL/EhKvkpl8ZQHGoadEXjuNEc+P9MYCtDrkeTij/8w1irpGI99tpdl5i7VdGnTY3pI5cZZbOhsoHiHdarXkN0h1sZ7nE/1Aex1kmFbvSQdrRIqOzSpgJP8CwOm1p5RlExj00tmf0mJxu9u18wiRFs0BmUEV7UwYCr6OfLMhzSwQS+4woFtptqMt3q0EN9kz38D22u2UB9jz2cSEZXqWWwEp9c6fmM4fIXxoT1kA4l3mb3E+l0pUfreLjGhzFhPaRNw3LP3n0is3gMm1ETYwJDJvEANqHW6K9YiUeaLHmuYLu9kIrMoX/9kqgmRrxRUIvdL/IBw2coqumwXIz6Up9xWhQYfq5W4QV8YWoL4xXqe542tb/U6xnvxfA9/okD2IOaAzNYLZoT9/EI9uMPjPMNu/1arZl9BXeqHmMMT6NWJb12O3AzrkX/BzKL/g8kh09xF57Bdoyj+ZRlrVacheRawbKo/6s5jHPbhc0LsdfsKUXUl34I9GVqdGFl/7n03LUS6V3UXa7BE1zla8p54Xx90wdRC81zHME852vGL7FoSKX+ALfTIMkni1DNAAAAAElFTkSuQmCC"
       },
       232: function (e, t) {
          e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAh2SURBVGhD1ZprzJZzHMefp4Okg446UlKRiqlW2ZpeEMMrqwyj6ZXD8tZmvGHYzLxB0uZQWKSwmUObmUYJyUaE6OiQlFQiUj2+n+u+v8/zu//+13M/T5qt7/a5f9fhd/0P1/9w/Q93Y1NTU4eGhoajojXbJBpLLMLnHHGRuECMEaeLfqKrQAfFbrFdfC0+FqvEBlEWdozDyvqQEdljzsQ4MVdcJYaLY9FmsUwsFl+JNI6osnQ0NlAiZKbEFiWWsReLt8VRcbx0RLwmpgjHFWktPcpO+zIxWrwh2qLfxc7KYSGOuVZPvJwlYrAgzlw6oi3S29ZMwG0il5BDVRu1RpwplhVnFb0oRgjutUW7xUyRS09NJrAc1MtEd0EiUu0T94mHi7MWvSNOETwbnyNTxEF4+ETdLZ4SfxVnLaJ0HhCdRGkmsPUy0Uekb5DAnxQDxEjxh7C2ib7CYaYl4rD7CXwtjskgVfdVLiR6XpwsspnAclCWiV5irYiiuK8Q9lkkLDJ4iSgCrtq0RGIcM0TsLO4SXIcbxH4RRUfQVfwrE9iyTHQR9EpRWwVvzD7DRWwfy0VzwFVbViK2PGPtEbw83ztPbBFRS0VnUZMJLAcxYNv5IhVt4glxpaANPCQsus7xIo2gtRLBjhM8a90uuDdBPCaIM9W9IsZRWJ/ECGaJejpYxXpTpJnAxozkSgR41tolNlYOS0V1vFzEuBqLwMIXsr/4vGrRDvGZmCH4ypfpkGDY8aXgS/292CvmiakCfSj4eg8QA8UQcVaVk0SZSNd7YpQYxAWJdI0V+wT3m7/sfktUHYsip/Fyb5Sgq90k/i/tEHTtEwXpJC2xGlL1nO4iIz6hvh4W1kLR7Fi1ME3E3uZ4i3ZxqeDbQXx+2VgSb9HRnCuKtBU/1eJ5TlwnEEU2WjBarRRdi6WqrBbWLVU7UowQFD/Vp4/oKXjGOix+Ez+LrWKjWC9Iw+MCEc9Q8ZNIB7C9BM/0FehZcaMocklmhorYlVKNYknY4s9QxeJL3FP4raX+sft1r5X6YAkjftVni1gS0d4hLJ4ZIjq4Ac8RnSuHDX+L+SItCb8VGpnFsHu/4HrqjwXLx6kPllKio7AmilgScUqxUBwQiE6CtBfVioCuEdbrgl4hRhQDZAJl0aM5guhvC5bPy3w/Fdb5IpcJ/H4VzF8s0t6IwzDBBMnCKUYQA+woaAsWXW5ZwrBg+TznS9iUrnW2IK40E7ZLhTVeDMNpuuAmojG+JWIEzgSW6sc3wPpGxAiiRQ4XcZzzddjfCovG3knkMoHlu+LqxbXpOE4qTiviY0hPFSOIdrDgTVl8+HIRWelx6hvDJiyLF0Zcqb8t8/+1wppEILHxrhNpBNH6i2/9KNKIorhmcRx907AJK+o0Ef3TOGKbGksAtBGLFY2yTGBZFYnaI9IIrPQax/bNhU0jjiKuGHYaHtXaGkYfTtfXvXJejIe+E2UBUHcvrBwWWi5yvrb48gyi6nwgyvzRrKpFawTP5HyxZ4gpAh0gI0d0wFs5kXX0RM9As3JVi5XAsuJMq9ZLgvpd5p9WLapLmS8vdaaw2lW1GL9sFtatIo5r4ngIy3w9ijFS6hNtbqqbjp3s30NEMXninom+2HnC2sxbYBRqMXlxT5J7C7+IKEahZW/M1uI87a2iX9q1x14sFzYjbWsbgcXBGmOcskxgd4oohuxlvq5yFtfLMoGNIwbEMB5Fn2hZLLc2EOBHleNCk0UXUfYwgTM6tqinOd+YWCu9nj5HWBZxEFfqY8sKfxyRrCNQxi3cRN0EY6/cw4i5eRxKMN9OfZ3YshJJ/W3jYPQHQVxlvtOEOyiurSTgLYIxlnW1SB+2OGbEa7EPEn1jJpxoKw0ztYx4Lap7mS9hXyssRs1FG+HmEq5UNVucKvxwFNfiGIchdIwgZgLLdassYY6D9mkx/c35EiZT6DgCYNpxxG+N+TpFiSgy5uGOwHKADCwtJlk9RC4TDtvKJcz3iTOWCLtZqa/DvEm4WjEqWSRqFh+eEdcLRDdLwAwKUQyQ3sUfKnSz4B6TMxYs2Lli5EoGmVNY+LCoQdg0ZEa7VGsGf/gtEAg/PqL4OE5nIl18eEVQOsVHyR+ZMSIuQLBs6nu2rLteJnJLmcdLXg4iLuKMH9C4HMQa12RRKQx+fCLimi+ObLFxj0UyFstYNPu/lC7QsXofF+heEM0vmgOKzlWnt6ChMTtDLEIwBaW7c1XKifa1qQpdJ8/tEqxweDzEEP5RQRyET3dLG6MK11syZfcXfy+ZUkWpylTPSvVzjgKMp+qtJLLQzF6JtUKkpYtNF7FjPPbhWevPKvU0V9TElfYsaIW4v3JYI9avaJCsOdGoHxQWi9yxK7aNpZge48Nb5VmLEmNmyBIP6aCRp2J1kcXw2riquUrfEuuubKpEbRFsvvjNsynD5ozFSLfmLYlciUSfODqmo2HziOvEMVCsF1GrRDeRhlOTkZobgm0utrui2A6bI+x3p7CojjTIGE66ZBrvsboeq/BiwXXSNF3EPUb0vugtYhpta1bjc5YNSDYiU7FhyVYDc4gY4XbhzVCeLysRfOJzbBqxsdpfLBBxVwCtFqWZAFeTnAOW+/TnbBGnYgGZLeV7irMWsfXs4s+VCPdWciHoEcHC+d7irFa8AF5YLo3NtFYizqQtm/exp2pNbGnz54C0RGgDuT8MxA+xxZ8TWPnvKHJpjJTu6qaZsB0k+HtFWzZ6jvUvHIi/iVB1Y5qijRTXSGB0wJZlwha/qYKOIH5p/6t4OWyJe7vPcaU20nyv+Al9cjp6TW1t3135nvA3JwZucQ7dHm0TL4unxRcijSPaqJp7Rc6qJ+3NRLTcZ6jBH88mCIYeTF1zfzxjJZPJ0CfiXcFEjV2AenFEJfcaGv8B7++wuhvl2rYAAAAASUVORK5CYII="
       },
       233: function (e, t, n) {
          "use strict";
          (function (e) {
             var a = n(13),
                r = n.n(a),
                i = n(79),
                l = n(187),
                o = n(178),
                s = n(111);
             t.a = Object(i.b)(function (e) {
                return {
                   lastLuaScript: e.LuaForm.lastLuaScript
                }
             })(class extends a.Component {
                constructor(t) {
                   super(t), this.SendScript = (() => {
                      var t = l.a.getModels()[0].getValue();
                      e.ipcRenderer.send("message", {
                         action: "luascript",
                         script: t
                      })
                   }), this.TriggerFileInputClick = (e => {
                      this.fileInput.current.click()
                   }), this.OpenFile = (e => {
                      if (e.target.files[0]) {
                         var t = e.target.files[0].path;
                         this.ReqestInputFile(t)
                      }
                      e.target.value = null
                   }), this.Drop = (e => {
                      e.preventDefault(), e.stopPropagation();
                      for (let a of e.dataTransfer.files) {
                         var t = a.path.substr(a.path.length - 4);
                         if (".txt" === t || ".lua" === t) {
                            var n = a.path;
                            this.ReqestInputFile(n);
                            break
                         }
                      }
                   }), this.onDragOver = (e => {
                      e.preventDefault()
                   }), this.ReqestInputFile = (t => {
                      e.ipcRenderer.send("message", {
                         action: "openluafile",
                         filePath: t
                      })
                   }), this.InputFile = ((e, t) => {
                      this.monacoEditor.setValue(t)
                   }), this.state = {
                      script: ""
                   }, this.monacoEditor = null, this.fileInput = r.a.createRef()
                }
                componentDidMount() {
                   this.monacoEditor = l.a.create(document.getElementById("codecontainer"), {
                      value: ["--Find Lua scripts online and paste them here!", 'print("Hello world!")'].join("\n"),
                      language: "lua",
                      automaticLayout: !0,
                      minimap: {
                         enabled: !1
                      },
                      scrollbar: {
                         horizontal: "hidden",
                         verticalScrollbarSize: 5
                      },
                      theme: "vs-dark",
                      showFoldingControls: "always"
                   }), this.props.lastLuaScript && this.monacoEditor.setValue(this.props.lastLuaScript), e.ipcRenderer.on("luainput", this.InputFile)
                }
                componentWillUnmount() {
                   this.props.dispatch(Object(s.b)(this.monacoEditor.getValue())), this.monacoEditor.dispose(), e.ipcRenderer.removeListener("luainput", this.InputFile)
                }
                render() {
                   return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                      id: "luaexecutor"
                   }, r.a.createElement(o.a, null), r.a.createElement("div", {
                      id: "codecontainer"
                   }), r.a.createElement("div", {
                      id: "luaButtons"
                   }, r.a.createElement("input", {
                      className: "luaButton",
                      type: "submit",
                      value: "Execute",
                      onClick: this.SendScript
                   }), r.a.createElement("input", {
                      ref: this.fileInput,
                      type: "file",
                      accept: ".txt,.lua",
                      style: {
                         display: "none"
                      },
                      onChange: this.OpenFile
                   }), r.a.createElement("input", {
                      className: "luaButton",
                      type: "button",
                      value: "Open File",
                      onClick: this.TriggerFileInputClick,
                      onDrop: this.Drop,
                      onDragOver: this.onDragOver
                   }))), r.a.createElement("style", null, "\n            #luaexecutor{\n                height: 100%;\n                display: flex;\n                flex-direction: column;\n            }\n\n            #codecontainer{\n                flex: 1;\n                overflow: hidden;\n            }\n\n            #luaButtons{\n                display: flex;\n                flex-direction: row-reverse;\n            }\n\n            .luaButton{\n                margin-bottom: 5px; \n                border: none; \n                background-color: #171717;\n                border-radius: var(--less-round);\n                padding: 4px 12px; \n                margin-top: 4px;\n                margin-right: 4px;\n            }\n            "))
                }
             })
          }).call(this, n(146))
       },
       234: function (e, t, n) {
          "use strict";
          (function (e) {
             var a = n(13),
                r = n.n(a),
                i = n(187),
                l = n(178);
             t.a = class extends a.Component {
                constructor(t) {
                   super(t), this.SendScript = (() => {
                      var t = i.a.getModels()[0].getValue();
                      e.ipcRenderer.send("message", {
                         action: "luacscript",
                         script: t
                      })
                   }), this.TriggerFileInputClick = (e => {
                      this.fileInput.current.click()
                   }), this.OpenFile = (e => {
                      if (e.target.files[0]) {
                         var t = e.target.files[0].path;
                         this.ReqestInputFile(t)
                      }
                      e.target.value = null
                   }), this.Drop = (e => {
                      e.preventDefault(), e.stopPropagation();
                      for (let a of e.dataTransfer.files) {
                         var t = a.path.substr(a.path.length - 4);
                         if (".txt" === t || ".lua" === t) {
                            var n = a.path;
                            this.ReqestInputFile(n);
                            break
                         }
                      }
                   }), this.onDragOver = (e => {
                      e.preventDefault()
                   }), this.ReqestInputFile = (t => {
                      e.ipcRenderer.send("message", {
                         action: "openluafile",
                         filePath: t
                      })
                   }), this.InputFile = ((e, t) => {
                      this.monacoEditor.setValue(t)
                   }), this.state = {
                      script: ""
                   }, this.monacoEditor = null, this.fileInput = r.a.createRef()
                }
                componentDidMount() {
                   this.monacoEditor = i.a.create(document.getElementById("codecontainer"), {
                      value: ["getglobal print", "pushstring Hello world!", "pcall 1 0 0"].join("\n"),
                      minimap: {
                         enabled: !1
                      },
                      scrollbar: {
                         horizontal: "hidden",
                         verticalScrollbarSize: 5
                      },
                      showFoldingControls: "always"
                   }), e.ipcRenderer.on("luainput", this.InputFile)
                }
                componentWillUnmount() {
                   this.monacoEditor.dispose(), e.ipcRenderer.removeListener("luainput", this.InputFile)
                }
                render() {
                   return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                      id: "luaexecutor"
                   }, r.a.createElement(l.a, null), r.a.createElement("div", {
                      id: "codecontainer"
                   }), r.a.createElement("div", {
                      id: "luaButtons"
                   }, r.a.createElement("input", {
                      className: "luaButton",
                      type: "submit",
                      value: "Execute",
                      onClick: this.SendScript
                   }), r.a.createElement("input", {
                      ref: this.fileInput,
                      type: "file",
                      accept: ".txt,.lua",
                      style: {
                         display: "none"
                      },
                      onChange: this.OpenFile
                   }), r.a.createElement("input", {
                      className: "luaButton",
                      type: "button",
                      value: "Open File",
                      onClick: this.TriggerFileInputClick,
                      onDrop: this.Drop,
                      onDragOver: this.onDragOver
                   }))), r.a.createElement("style", null, "\n            #luaexecutor{\n                height: 100%;\n                display: flex;\n                flex-direction: column;\n            }\n\n            #codecontainer{\n                flex: 1;\n            }\n\n            #luaButtons{\n                display: flex;\n            }\n\n            .luaButton{\n                width: 120px; \n                margin: auto; \n                margin-bottom: 5px; \n                border: none; \n                padding: 3px 5px; \n                background-color: #131418; \n                color: #fff;\n                background: #3ecf8e;\n                text-shadow: 0 1px 3px rgba(36,180,126,.4);\n                border-radius: var(--less-round);\n                padding: 8px 14px;\n                margin-top: 10px;\n            }\n            "))
                }
             }
          }).call(this, n(146))
       },
       235: function (e, t, n) {
          "use strict";
          (function (e) {
             var a = n(13),
                r = n.n(a),
                i = n(79);
             class l extends a.Component {
                constructor(...t) {
                   super(...t), this.SendMessage = (() => {
                      var t = Object.keys(this.props.message)[0];
                      e.ipcRenderer.send("message", {
                         action: t,
                         data: this.props.message[t]
                      })
                   })
                }
                render() {
                   return r.a.createElement("button", {
                      className: "quickcommand",
                      onClick: this.SendMessage
                   }, r.a.createElement("p", null, this.props.text), r.a.createElement("style", null, "\n            .quickcommand{\n\t\t\t\tpadding: 5px 10px;\n\t\t\t\ttext-align: center;\n\t\t\t\tbackground-color: #131418;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tmargin-top: 3px;\n                cursor: pointer;\n                width: 110px;\n                color: white;\n                margin: 5px;\n                border: none;\n            }\n            "))
                }
             }
             t.a = Object(i.b)(function (e) {
                return {
                   topMost: e.Settings.topMost
                }
             })(class extends a.Component {
                constructor(t) {
                   super(t), this.SendScript = (t => {
                      e.ipcRenderer.send("message", {
                         action: "luascript",
                         script: t
                      })
                   }), this.KeyCard = (() => {
                      this.SendScript('game:GetService("Players").LocalPlayer.TeamValue.Value = "Police"')
                   }), this.Gravity = (() => {
                      this.SendScript('game:GetService("Workspace").Gravity = 196.2')
                   }), this.NoGravity = (() => {
                      this.SendScript('game:GetService("Workspace").Gravity = 25')
                   }), this.state = {}
                }
                render() {
                   return r.a.createElement("div", {
                      style: {
                         height: "100%"
                      }
                   }, r.a.createElement("div", {
                      id: "quickcommands"
                   }, r.a.createElement(l, {
                      text: "Criminal ESP",
                      message: {
                         storedluascript: {
                            filename: "jailbreak/criminalesp.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Police ESP",
                      message: {
                         storedluascript: {
                            filename: "jailbreak/policeesp.lua"
                         }
                      }
                   }), r.a.createElement("div", {
                      class: "quickcommand",
                      onClick: this.KeyCard
                   }, r.a.createElement("p", null, "Keycard")), r.a.createElement(l, {
                      text: "Noclip",
                      message: {
                         storedluascript: {
                            filename: "general/noclip.lua"
                         }
                      }
                   }), r.a.createElement("div", {
                      class: "quickcommand",
                      onClick: this.NoGravity
                   }, r.a.createElement("p", null, "Low gravity")), r.a.createElement("div", {
                      class: "quickcommand",
                      onClick: this.Gravity
                   }, r.a.createElement("p", null, "Gravity"))), r.a.createElement("style", null, "\n            #quickcommands{\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: center;\n                height: 100%;\n                align-items: center;\n                max-width: 450px;\n                margin: auto;\n            }\n\n            .quickcommand{\n                padding: 5px 10px;\n\t\t\t\ttext-align: center;\n\t\t\t\tbackground-color: #131418;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tmargin-top: 3px;\n                cursor: pointer;\n                width: 110px;\n                color: white;\n                margin: 5px;\n            }\n            "))
                }
             })
          }).call(this, n(146))
       },
       236: function (e, t, n) {
          "use strict";
          (function (e) {
             var a = n(13),
                r = n.n(a),
                i = n(79);
             class l extends a.Component {
                constructor(...t) {
                   super(...t), this.SendMessage = (() => {
                      var t = Object.keys(this.props.message)[0];
                      e.ipcRenderer.send("message", {
                         action: t,
                         data: this.props.message[t]
                      })
                   })
                }
                render() {
                   return r.a.createElement("button", {
                      className: "quickcommand",
                      onClick: this.SendMessage
                   }, r.a.createElement("p", null, this.props.text), r.a.createElement("style", null, "\n            .quickcommand{\n\t\t\t\tpadding: 5px 10px;\n\t\t\t\ttext-align: center;\n\t\t\t\tbackground-color: #131418;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tmargin-top: 3px;\n                cursor: pointer;\n                width: 110px;\n                color: white;\n                margin: 5px;\n                border: none;\n            }\n            "))
                }
             }
             class o extends a.Component {
                constructor(t) {
                   super(t), this.HandleChange = (e => {
                      var t = e.target.value;
                      console.log(t), this.setState({
                         vector3position: t
                      })
                   }), this.Execute = (() => {
                      e.ipcRenderer.send("message", {
                         action: "clicommand",
                         data: "vectorteleport ".concat(this.state.vector3position)
                      })
                   }), this.state = {
                      vector3position: "0 0 0"
                   }
                }
                render() {
                   return r.a.createElement("div", null, r.a.createElement("p", null, "Teleports"), r.a.createElement("select", {
                      onChange: this.HandleChange
                   }, r.a.createElement("option", {
                      value: "-258.1 5 299.7"
                   }, "Black Bear"), r.a.createElement("option", {
                      value: "282 46 236"
                   }, "Brown Bear"), r.a.createElement("option", {
                      value: "106.3 35 50.1"
                   }, "Panda Bear"), r.a.createElement("option", {
                      value: "-106 119 -77"
                   }, "Polar Bear"), r.a.createElement("option", {
                      value: "267 103 20"
                   }, "Science Bear"), r.a.createElement("option", {
                      value: "34 14 371"
                   }, "Traveling Bear"), r.a.createElement("option", {
                      value: "-183.8 4.6 87.5"
                   }, "Mother Bear"), r.a.createElement("option", {
                      value: "507.3 5.7 -45.7"
                   }, "Tunnel Bear"), r.a.createElement("option", {
                      value: "-332 20 244"
                   }, "Redfield Boost"), r.a.createElement("option", {
                      value: "319 58 103"
                   }, "Bluefield Boost"), r.a.createElement("option", {
                      value: "-40 176 -191.7"
                   }, "Mountaintop Boost"), r.a.createElement("option", {
                      value: "-240 17 345"
                   }, "Red Cannon (22)"), r.a.createElement("option", {
                      value: "-287 73 22"
                   }, "Blue Cannon (16)"), r.a.createElement("option", {
                      value: "266 109 -25"
                   }, "Yellow Cannon (12)"), r.a.createElement("option", {
                      value: "78 23 149"
                   }, "Slingshot (8)"), r.a.createElement("option", {
                      value: "-136.8 4.6 243.4"
                   }, "Bee Shop"), r.a.createElement("option", {
                      value: "86 4.6 294"
                   }, "Tool Shop"), r.a.createElement("option", {
                      value: "165 69 -161"
                   }, "Tool Shop 2"), r.a.createElement("option", {
                      value: "-18 176 -137"
                   }, "Mountain Top Shop"), r.a.createElement("option", {
                      value: "-234 17 398"
                   }, "Ticket Tent"), r.a.createElement("option", {
                      value: "-334 21 216"
                   }, "Red Clubhouse"), r.a.createElement("option", {
                      value: "292 4 98"
                   }, "Blue Clubhouse"), r.a.createElement("option", {
                      value: "-12.8 184 -222.2"
                   }, "Ticket Shop"), r.a.createElement("option", {
                      value: "47 5 323"
                   }, "Club Honey"), r.a.createElement("option", {
                      value: "-297 53 68"
                   }, "Royal Jelly Shop"), r.a.createElement("option", {
                      value: "81 18 240"
                   }, "Ticket Royal Jelly Shop"), r.a.createElement("option", {
                      value: "301 48 191"
                   }, "Honey Storm Dispenser"), r.a.createElement("option", {
                      value: "313.3 58 86.9"
                   }, "Blueberry Dispenser"), r.a.createElement("option", {
                      value: "-320.5 46 272.5"
                   }, "Strawberry Dispenser"), r.a.createElement("option", {
                      value: "282 68 -62"
                   }, "Instant Honey Converter"), r.a.createElement("option", {
                      value: "218 3 140"
                   }, "King Beatles Lair"), r.a.createElement("option", {
                      value: "174 34 189"
                   }, "Clover Field"), r.a.createElement("option", {
                      value: "-94 5 116"
                   }, "Mushroom Field"), r.a.createElement("option", {
                      value: "-57.2 20 -5.3"
                   }, "Spider Field"), r.a.createElement("option", {
                      value: "113.7 4 101.5"
                   }, "Blue Field"), r.a.createElement("option", {
                      value: "-208 4 185"
                   }, "Sunflower Field"), r.a.createElement("option", {
                      value: "-169.3 20 -3.2"
                   }, "Strawberry Field"), r.a.createElement("option", {
                      value: "-258.1 5 299.7"
                   }, "Red Field"), r.a.createElement("option", {
                      value: "-30 4 225"
                   }, "Dandelion Field"), r.a.createElement("option", {
                      value: "93 20 -25"
                   }, "Bamboo Field"), r.a.createElement("option", {
                      value: "-322 20 124"
                   }, "Rose Field"), r.a.createElement("option", {
                      value: "-194 68 -107"
                   }, "Cactus Field"), r.a.createElement("option", {
                      value: "-194 68 -182"
                   }, "Pumpkin Field"), r.a.createElement("option", {
                      value: "76 176 -181"
                   }, "Mountaintop Field"), r.a.createElement("option", {
                      value: "-318 68 -150"
                   }, "Pine Tree Field"), r.a.createElement("option", {
                      value: "262 68 -201"
                   }, "Pineapple Tree Field"), r.a.createElement("option", {
                      value: "-8.4 234 -517.9"
                   }, "Onett"), r.a.createElement("option", {
                      value: "63 20.7 38.7"
                   }, "Gumdrop Dispenser"), r.a.createElement("option", {
                      value: "-228.2 5 89.4"
                   }, "Treat Shop"), r.a.createElement("option", {
                      value: "90.6 32.6 501"
                   }, "Ant Challenge")), r.a.createElement("button", {
                      onClick: this.Execute
                   }, "Go"))
                }
             }
             t.a = Object(i.b)(function (e) {
                return {
                   topMost: e.Settings.topMost
                }
             })(class extends a.Component {
                constructor(t) {
                   super(t), this.SendScript = (t => {
                      e.ipcRenderer.send("message", {
                         action: "luascript",
                         script: t
                      })
                   }), this.KeyCard = (() => {
                      this.SendScript('game:GetService("Players").LocalPlayer.TeamValue.Value = "Police"')
                   }), this.Gravity = (() => {
                      this.SendScript('game:GetService("Workspace").Gravity = 196.2')
                   }), this.NoGravity = (() => {
                      this.SendScript('game:GetService("Workspace").Gravity = 25')
                   }), this.state = {}
                }
                render() {
                   return r.a.createElement("div", {
                      style: {
                         height: "100%"
                      }
                   }, r.a.createElement("div", null, r.a.createElement("div", {
                      className: "section quickcommands"
                   }, r.a.createElement(l, {
                      text: "Auto Dig",
                      message: {
                         storedluascript: {
                            filename: "beesim/autodig.lua"
                         }
                      }
                   })), r.a.createElement("br", null), r.a.createElement("div", {
                      id: "specgencoms",
                      className: "section quickcommands"
                   }, r.a.createElement(o, null)), r.a.createElement("br", null), r.a.createElement("div", {
                      className: "section quickcommands"
                   }, r.a.createElement(l, {
                      text: "TP Tool",
                      message: {
                         storedluascript: {
                            filename: "general/tptool.lua"
                         }
                      }
                   }), r.a.createElement(l, {
                      text: "Infinite Jump",
                      message: {
                         storedluascript: {
                            filename: "general/infinitejump.lua"
                         }
                      }
                   }), r.a.createElement("button", {
                      className: "quickcommand",
                      onClick: this.NoGravity
                   }, r.a.createElement("p", null), "Low gravity"), r.a.createElement("button", {
                      className: "quickcommand",
                      onClick: this.Gravity
                   }, "Gravity"))), r.a.createElement("style", null, "\n            #quickcommands{\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: center;\n                height: 100%;\n                align-items: center;\n                max-width: 450px;\n                margin: auto;\n            }\n\n            .quickcommands{\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: center;\n            }\n\n            .quickcommand{\n                padding: 5px 10px;\n\t\t\t\ttext-align: center;\n\t\t\t\tbackground-color: #131418;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tmargin-top: 3px;\n                cursor: pointer;\n                width: 110px;\n                color: white;\n                margin: 5px;\n            }\n\n            .section{\n                padding: 12px;\n            }\n\n            #specgencoms{\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: center;\n            }\n\n            #specgencoms > div{\n                margin: 25px;\n                width: 230px;\n            }\n\n            #specgencoms > div > p:nth-child(1){\n                color: gray;\n                margin-bottom: 5px;\n            }\n\n            #specgencoms input, #specgencoms select{\n                border: 1px solid #ccc;\n                padding: 8px;\n                width: 100%;\n                max-width: 180px;\n                margin-right: 5px;\n            }\n\n            #specgencoms button{\n                border: 1px solid #ccc;\n                padding: 8px;\n            }\n            "))
                }
             })
          }).call(this, n(146))
       },
       237: function (e, t, n) {
          "use strict";
          var a = n(13),
             r = n.n(a),
             i = n(79),
             l = n(111);
          var o = Object(i.b)()(class extends a.Component {
             constructor(...e) {
                super(...e), this.ChangeForm = (() => {
                   var e = this.props,
                      t = e.dispatch,
                      n = e.title;
                   t(Object(l.a)(n))
                })
             }
             render() {
                return r.a.createElement("div", {
                   className: "formOption",
                   onClick: this.ChangeForm
                }, r.a.createElement("p", null, this.props.title), r.a.createElement("style", null, "\n            .formOption{\n                text-align: center;\n                cursor: pointer;\n                margin: 5px 5px;\n                font-size: 14px;\n            }\n            "))
             }
          });
          Object(i.b)(function (e) {
             return {
                form: e.FormHandler.form
             }
          })(class extends a.Component {
             constructor(e) {
                super(e), this.toggleMenu = (() => {
                   this.state.menuMargin < 0 ? this.setState({
                      menuMargin: 0,
                      toggleRotation: 180
                   }) : this.closeMenu()
                }), this.closeMenu = (() => {
                   var e = -1 * (this.menu.current.clientWidth + 18);
                   this.setState({
                      menuMargin: e,
                      toggleRotation: 0
                   })
                }), this.state = {
                   menuMargin: -140,
                   toggleRotation: 0
                }, this.menu = r.a.createRef()
             }
             componentDidMount() {
                this.closeMenu()
             }
             componentDidUpdate(e, t, n) {
                e.form !== this.props.form && this.closeMenu()
             }
             render() {
                return r.a.createElement("div", {
                   ref: this.menu,
                   id: "SideMenu",
                   style: {
                      marginLeft: this.state.menuMargin
                   }
                }, r.a.createElement("div", {
                   className: "sideMenu_Toggle"
                }, r.a.createElement("p", {
                   onClick: this.toggleMenu
                }, ">>")), r.a.createElement("p", {
                   className: "sideMenu_title"
                }, "Games"), r.a.createElement("hr", null), r.a.createElement(o, {
                   title: "General"
                }), r.a.createElement(o, {
                   title: "Jailbreak"
                }), r.a.createElement(o, {
                   title: "Bee Simulator"
                }), r.a.createElement("style", null, "\n            #SideMenu{\n                width: 320px;\n                max-width: 120px;\n                border-right: 1px solid gray;\n                background-color: white;\n                position: fixed;\n                height: 100%;\n                box-shadow: 0px 0px 9px 0px #888888;\n                z-index: 1;\n                transition: all 0.3s ease-in-out;\n            }\n\n            .sideMenu_Toggle{\n                margin-left: 100%;\n                padding-left: 20px;\n                position: absolute;\n                height: 100%;\n                display: flex;\n                align-items: center;\n                padding-bottom: 30px;\n            }\n\n            .sideMenu_Toggle p{\n                background-color: white;\n                border: 1px solid gray;\n                padding: 10px 11px;\n                border-radius: 100%;\n                cursor: pointer;\n                transition: all 0.3s ease-in-out;\n                transform: rotate(".concat(this.state.toggleRotation, "deg);\n                opacity: 0.5;\n            }\n\n            .sideMenu_title{\n                color: gray;\n                text-align: center;\n                font-size: 14px;\n                margin: 5px 0px;\n            }\n            ")))
             }
          });
          var s = n(229),
             c = n(216),
             p = n(217),
             m = n(233),
             u = n(234);
          var d = Object(i.b)(function (e) {
                return {
                   tab: e.GeneralForm.tab
                }
             })(class extends a.Component {
                render() {
                   switch (this.props.tab) {
                      case "buttons":
                         return r.a.createElement(p.a, null);
                      case "luaexecutor":
                         return r.a.createElement(m.a, null);
                      case "luacexecutor":
                         return r.a.createElement(u.a, null);
                      default:
                         return r.a.createElement(p.a, null)
                   }
                }
             }),
             h = n(235),
             g = n(236);
          var E = Object(i.b)(function (e) {
             return {
                form: e.FormHandler.form
             }
          })(class extends a.Component {
             render() {
                switch (this.props.form) {
                   case "Agreement":
                      return r.a.createElement(s.a, null);
                   case "Attach":
                      return r.a.createElement(c.a, null);
                   case "General":
                      return r.a.createElement(d, null);
                   case "Jailbreak":
                      return r.a.createElement(h.a, null);
                   case "Bee Simulator":
                      return r.a.createElement(g.a, null);
                   default:
                      return r.a.createElement(c.a, null)
                }
             }
          });
          t.a = Object(i.b)(function (e) {
             return {
                form: e.FormHandler.form
             }
          })(class extends a.Component {
             render() {
                return this.props.form, r.a.createElement("div", {
                   id: "container"
                }, r.a.createElement(E, null), r.a.createElement("style", null, "\n                #container{\n                    flex: 1;\n                    flex-direction: column;\n                    overflow-y: auto;\n                    overflow-x: hidden;\n                    position: relative;\n                    background-color: #333333;\n                }\n                "))
             }
          })
       },
       239: function (e, t, n) {
          e.exports = n(320)
       },
       319: function (e, t, n) {},
       320: function (e, t, n) {
          "use strict";
          n.r(t);
          var a = n(13),
             r = n.n(a),
             i = n(202),
             l = n.n(i),
             o = n(79),
             s = n(212),
             c = n(226);
          Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
          var p = function (e = [], t) {
             switch (t.type) {
                case "SET_SETTING":
                   return Object.assign({}, e, t.settings);
                case "SET_SERVER_MESSAGE":
                   return Object.assign({}, e, t.serverMessage);
                default:
                   return e
             }
          };
          var m = function (e = [], t) {
             switch (t.type) {
                case "SET_MESSAGE":
                   return Object.assign({}, e, t.message);
                default:
                   return e
             }
          };
          var u = function (e = [], t) {
             switch (t.type) {
                case "SET_FORM_VIEW":
                   return Object.assign({}, e, {
                      form: t.form
                   });
                default:
                   return e
             }
          };
          var d = function (e = [], t) {
             switch (t.type) {
                case "SET_TAB_VIEW":
                   return Object.assign({}, e, {
                      tab: t.tab
                   });
                default:
                   return e
             }
          };
          var h = function (e = [], t) {
             switch (t.type) {
                case "SET_LASTLUASCRIPT":
                   return Object.assign({}, e, {
                      lastLuaScript: t.lastLuaScript
                   });
                default:
                   return e
             }
          };
          var g = Object(s.a)({
                Settings: p,
                MessageBox: m,
                FormHandler: u,
                GeneralForm: d,
                LuaForm: h
             }),
             E = (n(319), {
                FormHandler: {
                   form: void 0
                },
                GeneralForm: {
                   tab: "buttons"
                }
             });
          const x = Object(s.b)(g, E);
          l.a.render(r.a.createElement(o.a, {
             store: x
          }, r.a.createElement(c.a, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(e => {
             e.unregister()
          })
       }
    },
    [
       [239, 3, 4]
    ]
 ]);
 //# sourceMappingURL=main.fe9c1b7a.chunk.js.map