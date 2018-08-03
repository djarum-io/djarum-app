import DateTime from './DateTime';
import Duration from './Duration';
import LanguageTag from './LanguageTag';
import MIMEType from './MIMEType';
import NonNegativeInt from './NonNegativeInt';
import URI from './URI';
import { mergeSchemas } from '../utils';

export const resolvers = {
  DateTime: DateTime.resolver,
  Duration: Duration.resolver,
  LanguageTag: LanguageTag.resolver,
  MIMEType: MIMEType.resolver,
  NonNegativeInt: NonNegativeInt.resolver,
  URI: URI.resolver,
};
export default mergeSchemas([
  DateTime.schema,
  Duration.schema,
  LanguageTag.schema,
  MIMEType.schema,
  NonNegativeInt.schema,
  URI.schema,
]);
