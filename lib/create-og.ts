/**
 * Encodes a string using double encodeURIComponent.
 *
 * @param {string} str - The string to be encoded.
 * @returns {string} - The double encoded string.
 *
 * images: [siteConfig.meta.img],
 */
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));

/**
 * Generates an Open Graph image URL with specified title and meta information.
 *
 * @param {object} params - The parameters for the image.
 * @param {string} params.title - The title text to be included in the image.
 * @param {string} params.meta - The meta text to be included in the image.
 * @returns {string} - A URL string for the Open Graph image.
 */
export const createOgImage = ({
  title,
  meta,
}: {
  title: string;
  meta: string;
}) =>
  [
    // ACCOUNT PREFIX
    // `https://res.cloudinary.com/delba/image/upload`,
    // `https://res.cloudinary.com/dzonsuv6y/image/upload`,
    `https://res.cloudinary.com/dvczya1oj/image/upload`,
    // Composed Image Transformations
    `w_1600,h_836,q_100`,

    // TITLE
    // Karla google font in light rose
    `l_text:Karla_72_bold:${e(title)},co_rgb:88A0EB,c_fit,w_1400,h_240`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_180`,

    // META
    // Karla, but smaller
    `l_text:Karla_48:${e(meta)},co_rgb:AAB1D3,c_fit,w_1400`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_100`,

    // PROFILE IMAGE
    // dynamically fetched from my twitter profile
    // `l_v1734540153:logo`,
    // Transformations
    // `c_thumb,g_face,q_100`,
    // Positioning
    // `fl_layer_apply,w_140,g_north_west,x_100,y_100`,

    // BG
    `v1734540153/crumbs-bg.png`, // public id instead of folder or file names
  ].join("/");
