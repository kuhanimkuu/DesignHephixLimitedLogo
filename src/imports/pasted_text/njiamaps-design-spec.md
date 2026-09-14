Design a complete, production-quality web platform called "NjiaMaps".

NjiaMaps is a Kenya-focused geospatial intelligence and navigation platform. It is NOT simply another Google Maps clone.

Its core differentiators are:

1. Intelligent route scoring based on real-world road conditions, traffic, potholes, road quality, flooding, construction, incidents, historical data, distance and estimated travel time.
2. "Hidden Gems", a community-verified layer of local places and points of interest discovered and verified on the ground by paid contributors called Scouts.
3. Scouts are paid through M-Pesa for completing verification and field-data tasks.
4. AI is integrated throughout the platform for route intelligence, data validation, image analysis, duplicate detection, natural-language search and geographic recommendations.

The long-term ecosystem consists of:
- Public marketing website
- Main NjiaMaps platform
- Internal admin dashboard
- Scout contributor portal
- Public developer/API portal
- Future specialized data products for matatu SACCOs and county governments
- Future mobile application

IMPORTANT:
The current design should focus on the web platform, marketing website, admin dashboard, Scout portal and developer/API portal.

Do NOT design the future mobile app as a fully implemented product. Only include a small future-concepts section if necessary.

==================================================
BRAND / VISUAL DIRECTION
==================================================

Create a distinctive modern visual identity for NjiaMaps.

The visual identity should communicate:
- Navigation
- Kenya
- exploration
- trust
- technology
- community
- geographic intelligence

Avoid making the product look like a generic Google Maps clone.

Use a sophisticated green-based visual system inspired by Kenyan landscapes and modern geospatial technology.

Suggested palette:
- Primary: deep emerald/forest green
- Secondary: dark green
- Accent: warm amber/yellow
- Background: very light neutral
- Surface: white
- Primary text: very dark green/charcoal
- Secondary text: muted gray-green
- Success: green
- Warning: amber
- Danger: red
- Information: blue

Use these as a starting point, but refine the palette into a coherent professional design system.

Typography:
- Use a modern sans-serif such as Inter, Geist, or a similar highly legible typeface.
- Strong hierarchy.
- Large confident headings.
- Compact but readable dashboard typography.

Design language:
- Modern
- Premium
- Clean
- Data-driven
- Geospatial
- African but not stereotypical
- Professional enough for governments and enterprise customers
- Friendly enough for ordinary Kenyan users

Avoid excessive gradients, excessive glassmorphism, cartoonish illustrations, excessive rounded cards, or generic SaaS aesthetics.

Use subtle shadows, restrained borders, strong spacing and clear hierarchy.

==================================================
FIGMA FILE STRUCTURE
==================================================

Organize the Figma file into these sections/pages:

00 — Cover & Product Overview
01 — Design System
02 — Marketing Website
03 — Main NjiaMaps Platform
04 — Scout Portal
05 — Admin Dashboard
06 — Developer/API Portal
07 — Future Concepts

Create reusable components and variants wherever possible.

==================================================
01 — DESIGN SYSTEM
==================================================

Create a complete design system before designing the pages.

Include:

Colors:
- Primary
- Secondary
- Accent
- Background
- Surface
- Border
- Text
- Muted
- Success
- Warning
- Error
- Info

Typography:
- Display
- H1
- H2
- H3
- H4
- Body large
- Body
- Body small
- Caption
- Labels

Components:
- Primary button
- Secondary button
- Outline button
- Ghost button
- Danger button
- Icon button
- Search input
- Text input
- Select
- Dropdown
- Checkbox
- Radio
- Toggle
- Tabs
- Chips
- Badges
- Tooltips
- Alerts
- Toasts
- Modal
- Drawer
- Pagination
- Breadcrumbs
- Tables
- Cards
- Stat cards
- Empty states
- Loading states
- Error states

Navigation:
- Desktop top navigation
- Dashboard sidebar
- Mobile navigation
- Breadcrumb navigation

Map components:
- User location marker
- Destination marker
- Hidden Gem marker
- Scout marker
- Road condition marker
- Traffic marker
- Construction marker
- Flood marker
- Pothole marker
- Map popup
- Map controls
- Route line
- Route comparison card
- Map legend

Create component variants and states such as:
- Default
- Hover
- Active
- Disabled
- Loading
- Error
- Selected

==================================================
02 — PUBLIC MARKETING WEBSITE
==================================================

Design a complete responsive marketing website.

Pages:

1. Home
2. About
3. Route Intelligence
4. Hidden Gems
5. Scout Program
6. API / Data Platform
7. Business Solutions
8. Contact

--------------------------------------------------
HOME PAGE
--------------------------------------------------

Hero section:

Headline:

"Navigate Kenya with the road intelligence Google Maps doesn't have."

Supporting copy:

"NjiaMaps combines real road conditions, traffic intelligence and community-verified places to help you choose better routes and discover more."

Primary CTA:
"Explore NjiaMaps"

Secondary CTA:
"Become a Scout"

Hero visual:
Create a sophisticated interactive-style map of Kenya/Nairobi showing:
- Routes
- Traffic
- Road quality
- Potholes
- Hidden Gems
- POI markers
- Scout verification points

Make the map feel like the core product.

Below the hero, create:

Section:
"Not every 20-minute route is the same."

Explain route intelligence.

Show a visual comparison between:
- Fastest route
- Best road route
- Balanced route

Display:
- Time
- Distance
- Road quality
- Traffic
- Route score

Next section:
"Real roads. Real conditions."

Show road-condition data:
- Potholes
- Flooding
- Construction
- Road surface
- Traffic
- Incidents

Next:
"Discover the Kenya that maps don't always show."

Introduce Hidden Gems.

Show beautiful POI cards for:
- Local restaurants
- Scenic locations
- Trails
- Markets
- Beaches
- Cultural locations
- Local services

Every verified place should have a visible:
"Verified by Scouts" badge.

Next:
"Built by people on the ground."

Introduce Scouts.

Show:
- Task
- Verification
- Evidence
- Approval
- M-Pesa payment

Next:
"Built for more than navigation."

Introduce the data/API platform.

Show use cases:
- Logistics
- Fleet management
- Developers
- Travel companies
- Matatu SACCOs
- County governments

Final CTA:
"Build with Kenya's growing geographic intelligence layer."

Buttons:
"Explore API"
"Contact Us"

Footer:
- Product
- Scouts
- API
- Business
- About
- Contact
- Privacy
- Terms

==================================================
03 — MAIN NJIAMAPS PLATFORM
==================================================

Design the main authenticated NjiaMaps web application.

This should feel map-first.

Desktop layout:
- Left sidebar
- Top bar
- Large interactive map
- Contextual panels

Sidebar:

Dashboard
Navigate
Explore
Hidden Gems
Saved Places
Reports
Settings

Top bar:
- Search
- Location
- Notifications
- User profile

--------------------------------------------------
DASHBOARD
--------------------------------------------------

Show:

"Good morning, David"

Large destination search:

"Where are you going?"

Current location field.

Map should occupy most of the screen.

Below/alongside map show:
- Recent destinations
- Saved locations
- Nearby Hidden Gems
- Road alerts
- Current traffic

--------------------------------------------------
NAVIGATION FLOW
--------------------------------------------------

Create a complete route planning flow.

Screen 1:
Search destination.

Screen 2:
Route results.

Show at least 3 route options:

1. Recommended
2. Fastest
3. Best Road

Each route card displays:
- Estimated time
- Distance
- Road score
- Traffic score
- Road quality
- Number of incidents
- Key advantages

Example:

RECOMMENDED
2h 12m
156 km

Road Score: 91
Traffic: 84
Road Quality: 93

"Best overall balance"

FASTEST
2h 03m
Road Score: 72

BEST ROAD
2h 28m
Road Score: 95

Add CTA:
"Start Navigation"

--------------------------------------------------
ROUTE ANALYSIS
--------------------------------------------------

When the user selects a route, show:

Overall Route Score
91/100

Breakdown:
- Road Quality
- Traffic
- Distance
- Estimated Time
- Incidents
- Historical reliability

Show the route on the map.

Highlight poor road segments.

Show explanations such as:

"3.2 km of this route has poor road conditions."

"Traffic is currently moderate."

"Two pothole reports were recorded in the last 24 hours."

"Alternative route adds 8 minutes but avoids 5.4 km of poor road."

--------------------------------------------------
ROAD CONDITION DETAILS
--------------------------------------------------

When a user selects a road segment, display:

Road name
Condition score
Surface
Potholes
Traffic
Flooding
Construction
Last verified
Number of reports
Confidence level

Example:

Ngong Road

Road Condition
★★★★☆

Surface:
Asphalt

Potholes:
Low

Traffic:
Moderate

Last verified:
Today, 9:42 AM

Verified reports:
37

--------------------------------------------------
HIDDEN GEMS
--------------------------------------------------

Create a dedicated discovery page.

Top:
"Discover Hidden Gems"

Search:
"What are you looking for?"

Filters:
- Food
- Nature
- Adventure
- Shopping
- Culture
- Nightlife
- Services
- Family
- Scenic

Display:
Map + card grid.

Cards contain:
- Image
- Name
- Category
- Rating
- Distance
- Verification badge
- Short description

--------------------------------------------------
POI DETAIL
--------------------------------------------------

Create a detailed Hidden Gem page.

Include:
- Large image gallery
- Name
- Category
- Verified badge
- Rating
- Description
- Opening hours
- Contact
- Location
- Accessibility
- Road/access condition
- Reviews
- Scout verification information

CTA:
"Get Directions"

==================================================
04 — SCOUT PORTAL
==================================================

Create a dedicated Scout contributor portal.

The interface should be simpler and more task-oriented than the admin dashboard.

Sidebar:

Dashboard
Tasks
My Submissions
Earnings
History
Profile
Help

--------------------------------------------------
SCOUT DASHBOARD
--------------------------------------------------

Show:

"Good morning, Scout"

Earnings card:

Available:
KSh 2,350

Pending:
KSh 1,200

Total earned:
KSh 12,700

Nearby Tasks:

Verify Road Condition
Distance: 1.2 km
Reward: KSh 150

Verify Restaurant
Distance: 2.8 km
Reward: KSh 100

Inspect Hidden Gem
Distance: 4.1 km
Reward: KSh 250

Button:
"View All Tasks"

--------------------------------------------------
TASK LIST
--------------------------------------------------

Create map/list view.

Each task:
- Task type
- Location
- Distance
- Reward
- Estimated duration
- Priority
- Deadline
- Requirements

--------------------------------------------------
TASK DETAIL
--------------------------------------------------

Example:

VERIFY ROAD CONDITION

Ngong Road

2.3 km away

Reward:
KSh 150

Requirements:
- Reach location
- Capture road photos
- Assess surface condition
- Submit GPS coordinates

Button:
"Accept Task"

--------------------------------------------------
ACTIVE TASK
--------------------------------------------------

Show:

Task active
Distance to location

Checklist:
□ Location reached
□ Front photo
□ Road surface photo
□ Damage photo
□ Condition assessment

Map navigation preview.

Button:
"Submit Verification"

--------------------------------------------------
SUBMISSION FLOW
--------------------------------------------------

Create a field verification form.

Fields:
- GPS location
- Photos
- Road condition
- Pothole severity
- Flooding
- Construction
- Traffic
- Notes

Allow multiple photos.

Show image upload previews.

AI-assisted validation section:
"AI detected possible road damage."

Let Scout confirm/correct AI findings.

Submit button:
"Submit for Review"

--------------------------------------------------
EARNINGS
--------------------------------------------------

Show:
- Available balance
- Pending earnings
- Lifetime earnings
- Completed tasks
- Payment history

M-Pesa payout section.

Use realistic Kenyan KSh amounts.

==================================================
05 — ADMIN DASHBOARD
==================================================

Create a professional internal operations dashboard.

Sidebar:

Overview
Users
Scouts
Road Intelligence
POIs
Verification
Tasks
Payments
Analytics
API
Settings

--------------------------------------------------
ADMIN OVERVIEW
--------------------------------------------------

Dashboard cards:

Total Users
42,581

Active Scouts
1,284

Verified POIs
18,492

Road Reports
128,420

Routes Calculated
1.8M

Show trends.

Map:
Kenya/Nairobi intelligence heatmap.

Show:
- Pothole clusters
- Traffic hotspots
- Flood zones
- Scout activity
- POI density

--------------------------------------------------
SCOUT MANAGEMENT
--------------------------------------------------

Table:
- Scout
- Status
- Tasks completed
- Accuracy
- Earnings
- Last active
- Verification status

Actions:
- View
- Suspend
- Verify
- Assign task

--------------------------------------------------
VERIFICATION QUEUE
--------------------------------------------------

Show pending Scout submissions.

Each item includes:
- Scout
- Location
- Submission type
- Photos
- AI confidence
- Date
- Status

Review interface:

LEFT:
Submitted evidence

RIGHT:
Verification information

Buttons:
Approve
Reject
Request More Evidence

--------------------------------------------------
ROAD INTELLIGENCE
--------------------------------------------------

Large map.

Filters:
- Potholes
- Flooding
- Construction
- Poor surface
- Traffic
- Incidents

Show road segments with condition scores.

Allow administrators to inspect road segments.

--------------------------------------------------
POI MANAGEMENT
--------------------------------------------------

Table/grid of Hidden Gems.

Fields:
- Name
- Category
- Location
- Verification
- Scout
- Rating
- Status
- Last updated

Actions:
Approve
Edit
Reject
Flag

--------------------------------------------------
PAYMENTS
--------------------------------------------------

Show:

Scout payouts
Pending payments
Completed payments
Failed payments
M-Pesa transactions

Use KSh.

Include transaction table.

--------------------------------------------------
ANALYTICS
--------------------------------------------------

Create advanced charts for:

- Route usage
- Road reports
- POI growth
- Scout activity
- Geographic coverage
- Traffic trends
- Most reported roads
- Most popular Hidden Gems
- API usage
- Revenue

Use clean charts and data visualization.

==================================================
06 — DEVELOPER / API PORTAL
==================================================

Create a separate developer-facing experience.

Navigation:

Overview
Documentation
API Keys
Products
Usage
Billing
Webhooks
Support

--------------------------------------------------
API OVERVIEW
--------------------------------------------------

Headline:

"Build with Kenya's geographic intelligence."

Explain that developers can access:
- Road intelligence
- POI data
- Hidden Gems
- Route scoring
- Traffic data
- Geographic datasets

Show API product cards.

--------------------------------------------------
API DASHBOARD
--------------------------------------------------

Show:

API Requests
1.28M

Active API Keys
4

Current plan
Business

Usage chart.

--------------------------------------------------
API KEYS
--------------------------------------------------

Allow:
- Create API key
- Revoke
- Rotate
- Copy
- View usage

Use security-conscious UI.

--------------------------------------------------
DOCUMENTATION
--------------------------------------------------

Create realistic API documentation.

Example:

GET /v1/road-conditions

Parameters:
lat
lng
radius

Example request.

Example JSON response.

Sidebar:
- Getting Started
- Authentication
- Routes
- Road Conditions
- POIs
- Hidden Gems
- Traffic
- Errors
- Rate Limits

Use a professional developer documentation layout.

--------------------------------------------------
BILLING
--------------------------------------------------

Plans:

Developer
Business
Enterprise

Show:
- Monthly requests
- Rate limits
- Data products
- Support
- Pricing

Do not over-focus on exact pricing. Use realistic placeholder pricing.

==================================================
07 — FUTURE CONCEPTS
==================================================

Create a small conceptual section only.

Do NOT fully build these products.

Include visual concept cards for:

1. Matatu SACCO Intelligence
2. County Government Road Intelligence
3. NjiaMaps Mobile App

Explain that these are future products.

==================================================
RESPONSIVE DESIGN
==================================================

Design the primary web interfaces for desktop first.

Use a responsive 1440px desktop frame as the main design target.

Also create key tablet and mobile responsive states for:
- Marketing homepage
- Navigation
- Hidden Gems
- Scout portal

The admin dashboard can remain desktop-focused.

==================================================
MAP DESIGN
==================================================

Maps are central to the product.

Use a sophisticated map visual style.

The map should include:
- Roads
- Neighborhoods
- Geographic labels
- Traffic
- Route lines
- POIs
- Hidden Gems
- Road condition overlays
- Map controls

Create realistic Nairobi/Kenya geographic context.

Do not make the map a generic abstract rectangle.

Use clear legends and map controls.

==================================================
DATA VISUALIZATION
==================================================

Use meaningful visualizations rather than decorative charts.

Examples:
- Route score gauges
- Road quality indicators
- Traffic heatmaps
- Geographic heatmaps
- Line charts
- Bar charts
- Donut charts
- KPI cards
- Trend indicators

Use accessible contrast.

==================================================
UX PRINCIPLES
==================================================

The platform should prioritize:

1. Clarity
2. Geographic context
3. Trust
4. Speed
5. Data transparency
6. Mobile-friendly Scout workflows
7. Professional enterprise administration
8. Simple navigation

Avoid unnecessary UI complexity.

Use progressive disclosure for advanced information.

When displaying AI-generated information, clearly label it as AI-assisted and show confidence where appropriate.

When displaying Scout information, show verification status and evidence.

==================================================
IMPORTANT PRODUCT PRINCIPLES
==================================================

NjiaMaps should NOT feel like five unrelated applications.

All interfaces must share:
- Same brand
- Same colors
- Same typography
- Same component system
- Same iconography
- Same terminology

However, each interface should have a different density:

Marketing:
Visual and spacious.

Main platform:
Map-first and intuitive.

Scout:
Task-oriented and mobile-friendly.

Admin:
Dense, analytical and operational.

Developer:
Technical, structured and documentation-focused.

==================================================
PROTOTYPE INTERACTIONS
==================================================

Create clickable prototype interactions for the most important flows.

Marketing:
Home → Explore NjiaMaps

Main platform:
Search → Route Results → Route Analysis → Start Navigation

Hidden Gems:
Explore → Filter → POI Detail → Get Directions

Scout:
Dashboard → Task → Accept → Active Task → Submit → Payment Pending

Admin:
Dashboard → Verification Queue → Submission → Approve

Developer:
API Dashboard → API Keys → Documentation → Usage

Use realistic transitions and overlays.

==================================================
FINAL QUALITY BAR
==================================================

The result should look like a serious startup product that could realistically be shown to:
- Investors
- Kenyan businesses
- Developers
- County governments
- Transport organizations
- Potential Scout contributors

It should feel like a real product specification rather than a collection of generic UI mockups.

Prioritize:
- Strong information architecture
- Excellent visual hierarchy
- Reusable components
- Consistent spacing
- Realistic Kenyan context
- Sophisticated map UI
- Clear route intelligence
- Strong Scout verification UX
- Professional admin analytics
- Developer-friendly API experience

Create polished, high-fidelity screens rather than wireframes.