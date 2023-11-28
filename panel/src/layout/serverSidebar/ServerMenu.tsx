import { MenuNavLink } from '@/components/MainPageLink';
import { serverNameAtom } from '@/hooks/socketio';
import { useAtomValue } from 'jotai';
import { Box, ChevronRightSquare, Dna, Eye, FileEdit, LayoutDashboard } from 'lucide-react';


//Separate component to prevent re-render of the entire menu
function ServerName() {
    return useAtomValue(serverNameAtom);
}

export default function ServerMenu() {
    return <>
        <h2 className="mb-1.5 text-lg font-semibold tracking-tight overflow-hidden text-ellipsis">
            <ServerName />
        </h2>
        <div className="space-y-1">
            <MenuNavLink href="/">
                <LayoutDashboard className="mr-2 h-4 w-4" />Dashboard
            </MenuNavLink>
            <MenuNavLink href="/server/console">
                <ChevronRightSquare className="mr-2 h-4 w-4" />Live Console
            </MenuNavLink>
            <MenuNavLink href="/server/resources">
                <Box className="mr-2 h-4 w-4" />Resources
            </MenuNavLink>
            <MenuNavLink href="/server/server-log">
                <Eye className="mr-2 h-4 w-4" />Server Log
            </MenuNavLink>
            <MenuNavLink href="/server/cfg-editor">
                <FileEdit className="mr-2 h-4 w-4" />CFG Editor
            </MenuNavLink>
            {window.txConsts.showAdvanced && (
                <MenuNavLink href="/advanced" className='text-accent'>
                    <Dna className="mr-2 h-4 w-4" />Advanced
                </MenuNavLink>
            )}
            <MenuNavLink href="/test" className='text-accent'>
                <Dna className="mr-2 h-4 w-4" />Test
            </MenuNavLink>
        </div>
    </>
}