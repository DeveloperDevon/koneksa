import '@testing-library/jest-dom';
import { rest } from "msw";
import { setupServer } from "msw/node";
import { TIMEZONE_BASE_URL } from "./lib/contants";

const server = setupServer(
   rest.get(`${TIMEZONE_BASE_URL}/America`, (req, res, ctx) => {
      return res(
         ctx.status(200),
         ctx.json(["America/Los_Angeles", "America/New_York"])
      );
   })
);

function setupMUIDatePickerHelper() {
   // Used for selecting MUI date picker
   Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: any) => ({
         media: query,
         matches: query === "(pointer: fine)",
         onchange: () => {},
         addEventListener: () => {},
         removeEventListener: () => {},
         addListener: () => {},
         removeListener: () => {},
         dispatchEvent: () => false,
      }),
   });
}

function tearDownMUIDatePickerHelper() {
   //@ts-ignore
   delete window?.matchMedia;
}

beforeAll(() => {
   setupMUIDatePickerHelper()
   server.listen()
})

afterAll(() => {
   tearDownMUIDatePickerHelper()
   server.close
})