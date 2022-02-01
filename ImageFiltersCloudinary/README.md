# Apply image filters using cloudinary
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/project/61535970a2d80c410f7a12bf)

## Description
Apply image filters using cloudinary.com API key and secret and get image download link.

## Inputs
#### **path**  *Text*
Full path to image on disk like /tmp/abc.jpg or a public http url for image.
#### **filter**  *Text*
A number from 1 to 21 for the desired filter.

1. al_dente,
2. athena,
3. audrey,
4. aurora,
5. daguerre,
6. eucalyptus,
7. fes,
8. frost,
9. hairspray,
10. hokusai,
11. incognito,
12. linen,
13. peacock,
14. primavera,
15. quartz,
16. red_rock,
17. refresh,
18. sizzle,
19. sonnet,
20. ukulele,
21. zorro
#### **cloud_name**  *Text*
Cloud_name , you will get this post cloudinary.com registration in their dev documentation's configure sdk section.
#### **api_key**  *Text*
Cloudinary Api key , you will get this post cloudinary.com registration in their dev documentation's configure sdk section.
#### **api_secret**  *Text*
Cloudinary Api secret , you will get this post cloudinary.com registration in their dev documentation's configure sdk section.

## Output
#### **editedImageUrl**  *Text*
The transformed image url.

