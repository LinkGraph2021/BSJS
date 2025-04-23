module.exports = {
  id: 'backstop_default',
  viewports: [
    {
      label: 'desktop',
      width: 1024,
      height: 768
    },
    {
      label: 'mobile',
      width: 375,
      height: 667
    }
  ],
  scenarios: [
    {
      label: 'Homepage',
      url: 'https://stg.linkgraph.com/about-2025/', // Replace with the URL you're testing
      referenceUrl: '',
      readyEvent: '',
      readySelector: 'body',
      delay: 500,
      hideSelectors: [],
      removeSelectors: [],
      hoverSelectors: [],
      clickSelectors: [],
      postInteractionWait: 0,
      onReadyScript: '',
      onBeforeScript: '',
      browserScripts: [],
    }
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  engine: 'puppeteer',
  report: ['browser', 'CLI'],
  engineOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
