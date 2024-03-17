import * as xlsx from 'xlsx'
import path from 'path'

export const exportExcel = (
    data,
    workSheetColumnNames,
    workSheetName,
    filePath,
) => {
    const workBook = xlsx.utils.book_new()
    const workSheetData = [workSheetColumnNames, ...data]
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData)
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName)
    xlsx.writeFile(workBook, path.resolve(filePath))
}

export const exportTeamsToExcel = (
    teams,
    workSheetColumnNames,
    workSheetName,
    filePath,
) => {
    const data = teams.map(team => {
        return [
            team.name,
            team.leader,
            team.leaderPhone,
            team.members,
            team.status,
        ]
    })

    console.log(data);
    exportExcel(data, workSheetColumnNames, workSheetName, filePath)
}
