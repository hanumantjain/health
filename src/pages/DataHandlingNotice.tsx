import { LegalPage } from '../components/LegalPage';
import { dataHandlingNoticeContent } from '../data/content';

export function DataHandlingNotice() {
  return <LegalPage content={dataHandlingNoticeContent} />;
}
