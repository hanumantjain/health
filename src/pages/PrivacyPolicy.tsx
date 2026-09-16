import { LegalPage } from '../components/LegalPage';
import { privacyPolicyContent } from '../data/content';

export function PrivacyPolicy() {
  return <LegalPage content={privacyPolicyContent} />;
}
