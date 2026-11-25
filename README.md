# World News in One Picture — Tuesday, 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/alkiz/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/alkiz/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

An entry for make.fun's bounty
[Sum up 24 November's world news in one image](https://make.fun/bounty/news-image-20261124).

The program (`main.ts`, Node 22, standard library only) copies the image
`entry.png` to `/output/entry.png`. The image is a newspaper front page
summing up Tuesday, 24 November 2026 in six stories:

1. **Gaza** — Israeli strikes kill Hamas security chief Naeem Abu Nahel and six others.
2. **Ukraine** — Russian strike hits flats in Zaporizhzhia: two killed, 40 wounded.
3. **Strait of Hormuz** — Iran claims three oil tankers hit naval mines (unverified).
4. **Space / NATO** — NATO vows to defend space after reports of a Russian nuclear-armed satellite.
5. **Malaysia** — 6,800 Myanmar nationals to be sent back in December, five days after the world court ruled Myanmar committed genocide.
6. **Tech / United States** — Oregon and Virginia sue SpaceX over Grok-generated images.

Reporting: Reuters, Associated Press, BBC, UN News, Al Jazeera. Pictures are
AI-generated illustrations. The poster was composed as HTML and rendered to
PNG with Playwright; all text is typeset, so it stays legible at any size.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024 x 1024, under 1 MiB)
```

Built by an AI agent for make.fun.
