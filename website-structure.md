# Wafle Gamedev Website Structure

This document defines only website structure and content architecture.
No HTML/CSS/UI implementation is included.

## 1. Brand Foundation (from styleguide)
- Primary color: #20132E
- Secondary color: #753BAF
- Text color: white
- Primary font: Underdog

## 2. Main Page Structure (required)

### 2.1 Hero / Intro
Purpose: Immediate understanding of who Wafle Gamedev is.
Content blocks:
- Studio name and short tagline
- One short summary paragraph
- Primary CTA: View Games
- Secondary CTA: Contact Us

Suggested summary text block:
"Wafle Gamedev is an indie game studio and publisher focused on satirical, provocative, and experimental games, born from game jam culture and built around bold creative freedom."

### 2.2 About Snapshot
Purpose: Short background of the studio.
Content blocks:
- Studio origin in 2-3 sentences
- Timeline highlights (magazine phase -> game jams -> publishing)
- One line about creative direction and identity

### 2.3 Featured Games
Purpose: Present selected portfolio titles with short descriptions.
Structure:
- Grid/list of 4-8 featured games
- Each game item contains:
  - Title
  - Genre/type
  - 1-2 sentence description
  - Optional status label (Game Jam / Published / In Development)

Suggested initial featured list:
- Babushka
- City Boiler
- Moscow Subway Driver
- Pigeon Racing VR
- RobertTown
- Bureaucracy Boss

### 2.4 Studio Values / What They Make
Purpose: Clarify what kind of games users should expect.
Content blocks:
- 3-5 value pillars (for example: satire, dark humor, experimentation, creative risk)
- Short explanation line under each pillar

### 2.5 Contacts (required)
Purpose: Direct communication channel.
Content blocks:
- Business email
- Press/partnership email
- Optional Discord or community link
- Social links block (placeholders until real links exist)
- Location (optional)

### 2.6 Footer
Purpose: Utility and legal basics.
Content blocks:
- Copyright line
- Quick links
- Legal links (Privacy, Terms)

## 3. Other Pages To Implement Later

### 3.1 Games Page
Purpose: Full catalog and filtering.
Sections:
- Game catalog grid
- Filters (genre, status, year)
- Individual game cards linking to details

### 3.2 Game Detail Page (template)
Purpose: Dedicated page per game.
Sections:
- Hero banner (title + key art)
- Description
- Features list
- Gallery/media
- Store/download links
- Credits

### 3.3 About Page
Purpose: Full studio story and identity.
Sections:
- Founding story
- Team members
- Studio milestones
- Philosophy and creative statement

### 3.4 News / Updates Page
Purpose: Announcements and releases.
Sections:
- News list
- Categories (release, patch, event)
- Single post template

### 3.5 Contact Page
Purpose: Structured inbound communication.
Sections:
- Contact form structure (name, email, reason, message)
- Business contacts
- Press kit link
- FAQ quick answers

### 3.6 Press Kit Page
Purpose: Fast access for media and partners.
Sections:
- Studio description (short + long)
- Logos and brand assets
- Key game screenshots
- Contact for press requests

## 4. Content Model (recommended)

### 4.1 Global content entities
- Studio
- TeamMember
- Game
- NewsPost
- ContactChannel
- SocialLink

### 4.2 Main Page data dependencies
- Studio summary text
- Featured games collection
- Contact channels
- Social links

## 5. Navigation Structure
- Home
- Games
- About
- News
- Contact
- Press Kit

## 6. MVP Scope (structure only)
Include in MVP:
- Home structure with required sections
- Basic Games list structure
- Basic Contact structure

Post-MVP:
- Full game detail templates
- News system
- Press kit assets management
- Advanced filtering/search for games
