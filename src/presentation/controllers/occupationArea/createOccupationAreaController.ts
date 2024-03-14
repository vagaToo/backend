import {
  IBaseController,
  IBaseHttpRequest,
  IBaseHttpResponse,
} from '../../../application/protocols/protocols'
import { createOccupationAreaSchemaValidation } from '../../validations/occupationArea'
import { resolveZodValidationError } from '../../validations/zodValidationErrorResolver'
import { badRequest, ok, unespectedError } from '../../helpers/helpers'
import { ICreateOccupationAreaUsecase } from '../../../application/usecases'
import { OccupationAreaCreateDTO } from '../../../application/models'

export class CreateOccupationAreaController implements IBaseController {
  usecase: ICreateOccupationAreaUsecase

  constructor(usecase: ICreateOccupationAreaUsecase) {
    this.usecase = usecase
  }

  async handle(httpRequest: IBaseHttpRequest): Promise<IBaseHttpResponse> {
    let parsedBody: OccupationAreaCreateDTO

    try {
      parsedBody = createOccupationAreaSchemaValidation.parse(httpRequest.body)
    } catch (error: any) {
      const message = resolveZodValidationError(error)
      return badRequest({
        errorMessage: message,
      })
    }

    try {
      const response = await this.usecase.execute(parsedBody)
      return ok(response)
    } catch {
      return unespectedError()
    }
  }
}
