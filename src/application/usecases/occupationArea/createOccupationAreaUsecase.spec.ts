import { describe, expect, test, vi } from 'vitest'
import { MockedOccupationAreaRepository } from '../../repositories/testUtils/mockedOccupationAreaRepository'
import { CreateOccupationAreaUsecase } from './createOccupationAreaUsecase'
import { makeOccupationArea } from '../../models/testUtils/makeOcupationArea'

const makeSut = () => {
  const mockedOccupationAreaRepository = new MockedOccupationAreaRepository()
  const sut = new CreateOccupationAreaUsecase(mockedOccupationAreaRepository)

  return {
    mockedOccupationAreaRepository,
    sut,
  }
}

describe('createOccupationAreaUsecase', () => {
  test('should call repository with correct params', () => {
    const { mockedOccupationAreaRepository, sut } = makeSut()
    const createSpy = vi.spyOn(mockedOccupationAreaRepository, 'create')
    const params = makeOccupationArea()

    sut.execute(params)

    expect(createSpy).toHaveBeenCalledWith(params)
  })

  test('should return object from repository', async () => {
    const { mockedOccupationAreaRepository, sut } = makeSut()
    const createSpy = vi.spyOn(mockedOccupationAreaRepository, 'create')

    const repositoryResponse = makeOccupationArea()
    const params = makeOccupationArea()

    createSpy.mockResolvedValue(repositoryResponse)

    const sutResponse = await sut.execute(params)

    expect(repositoryResponse).toMatchObject(sutResponse)
  })
})
