import styled, { createGlobalStyle } from "styled-components";

import { COLORS } from "./constants";

export default createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    html, body, div,
    input, button, select, option,
    h1, h2, h3, h4, h5, h6, p,
    text {
        font-family:  sans-serif;
    }

    html, body {
    }


    /* http://meyerweb.com/eric/tools/css/reset/
        v2.0 | 20110126
        License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    body {
    }

    a {
        text-decoration: none;
    }

    #root {
        display:flex;
    }
`;

export const Status = styled.p`
  color: black;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Divider = styled.div`
  margin-top: 10px;
  height: 1px;
  background: ${COLORS.greyish};
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 50px;
`;

export const LI = styled.li`
  border-right: solid 1px ${COLORS.greyish};
  padding: 15px 15px 0px 15px;
  max-width: 800px;
  width: 100%;
`;

export const UL = styled.ul``;
