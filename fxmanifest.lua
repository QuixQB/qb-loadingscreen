fx_version "cerulean"

games { "gta5" }

version "1.0.0"

author "QBHub"

-- Load NUI project
--loadscreen 'http://localhost:3000'
loadscreen 'nui/dist/index.html'
loadscreen_manual_shutdown "yes"
loadscreen_cursor 'yes'

files {
    "nui/dist/**/*",
}

server_scripts { "build/sv_*.js" {
    "build/sv_*.js",
    "s.lua",
client_scripts { "build/cl_*.js" }
