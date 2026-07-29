# 🛡️ AntiNuke Bot

Full-featured Discord bot with MongoDB, OAuth2 verification, antinuke, tickets, backup.

---

## ⚙️ Setup

### 1. Fill in `.env`
```
DISCORD_TOKEN=       ← Bot token
OWNER_ID=            ← Your Discord user ID
MONGO_URI=           ← MongoDB Atlas connection string
DISCORD_CLIENT_ID=   ← From Discord Dev Portal > OAuth2
DISCORD_CLIENT_SECRET= ← From Discord Dev Portal > OAuth2
REDIRECT_URI=        ← Your Railway/hosting URL + /callback
PORT=3000
```

### 2. Discord Dev Portal
- Enable **Server Members Intent** + **Message Content Intent**
- Add `REDIRECT_URI` to **OAuth2 > Redirects**

### 3. Deploy on Railway
- Push to GitHub → connect Railway → add env vars → deploy
- Railway gives you a public URL automatically — use that as `REDIRECT_URI`

---

## 📋 Commands

### 🛡️ AntiNuke
- `/antinuke` — Opens panel with 1 button → manage all 24 modules interactively

### ✅ Verification
- `/setupverify enable` — Creates #verify channel with **Verify button** (no visible link)
- `/setupverify disable` — Disable gate
- `/setupverify dmall` — DM all unverified members

### 💾 Backup
- `/backup create/list/restore/delete`

### ✨ Premium
- `/messagebackup create/list/restore`
- `/pullmember [amount]`
- `/pullablemembers`
- `/pullmembersimport <from> <to> [amount]`

### 🎫 Tickets
- `/fullsetup wizard` — Setup wizard (categories, staff roles, log channels)
- `/panel` — Post ticket panel (Middleman + Support buttons)
- `/ticketclose` — Close ticket
- `/ticketadd <user>` — Add user to ticket
- `/rename <name>` — Rename ticket channel

### 👑 Admin
- `/extraowner add/remove/list`
- `/help` — Interactive help panel
- `/ping`

### 🤖 Owner Only
- `/ownerhelp` — Interactive owner commands panel
- `/getinvite <guildid>`
- `/leaveguild <guildid>`
- `/blacklistguildadd <guildid>`
- `/removeblacklist <guildid>`
- `/premiumaguild add/remove <guildid>`
- `/ticketguild add/remove <guildid>` — Enable/disable tickets for a guild
- `/botownpull <to_guild> <amount> [from_guild]`
- `/broadcast <message>`
