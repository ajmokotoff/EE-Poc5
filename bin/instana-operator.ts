import { configureApp, errorHandler } from '../lib/common/construct-utils';
import InstanaConstruct from '../lib/instana-construct';

const app = configureApp();

new InstanaConstruct().buildAsync(app, "instana-operator").catch((error) => {
    errorHandler(app, "Instana pattern is not setup due to missing secrets: " + error);
});