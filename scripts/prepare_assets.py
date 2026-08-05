from pathlib import Path
from PIL import Image, ImageOps


ROOT = Path(r"G:\Max麦麦\SHAKI")
OUT = Path(__file__).resolve().parents[1] / "public" / "assets"
OUT.mkdir(parents=True, exist_ok=True)


def save_webp(source: Path, name: str, size: tuple[int, int], position=(0.5, 0.5)) -> None:
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        image = ImageOps.fit(image, size, method=Image.Resampling.LANCZOS, centering=position)
        image.save(OUT / name, "WEBP", quality=84, method=6)


series = ROOT / "2.产品设计" / "SHAKI品牌" / "2026" / "拾光系列"

save_webp(
    series / "01拾光初" / "Product_in_bathroom_202604231737_23.jpeg",
    "shiguang-initial.webp",
    (900, 1120),
    (0.55, 0.65),
)
save_webp(
    series / "02拾光悦" / "Product_in_bathroom_202604221543.jpeg",
    "shiguang-pleasure.webp",
    (900, 1120),
    (0.5, 0.62),
)

joy_sources = sorted((series / "03拾光欣悦").glob("*.jpeg"), key=lambda p: (len(p.name), p.name))
if not joy_sources:
    raise FileNotFoundError("No product scene found in 03拾光欣悦")
save_webp(joy_sources[0], "shiguang-joy.webp", (900, 1120), (0.5, 0.55))

save_webp(
    series / "小程序主页PNG" / "更新背景图+LOGO" / "2.主页背景.png",
    "signal-field.webp",
    (860, 1500),
    (0.5, 0.45),
)

with Image.open(ROOT / "LOGO.png") as logo:
    logo = ImageOps.exif_transpose(logo).convert("RGBA")
    logo.thumbnail((640, 240), Image.Resampling.LANCZOS)
    logo.save(OUT / "shaki-logo.png", optimize=True)

print(f"Prepared assets in {OUT}")
