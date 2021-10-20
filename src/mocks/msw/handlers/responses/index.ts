import { houseDetails8HandlerResponse } from './houseDetails8HandlerResponse';
import { charactersPageSize25Page1HandlerResponse } from './charactersPageSize25Page1HandlerResponse';
import { charactersPageSize50Page1HandlerResponse } from './charactersPageSize50Page1HandlerResponse';

const handlersResponses = {
  houseDetails: {
    id_8: houseDetails8HandlerResponse,
  },
  characters: {
    pageSize25Page1: charactersPageSize25Page1HandlerResponse,
    pageSize50Page1: charactersPageSize50Page1HandlerResponse,
  },
};

export default handlersResponses;
