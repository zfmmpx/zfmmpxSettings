---@diagnostic disable: lowercase-global
hs.window.animationDuration = 0
hs.application.enableSpotlightForNameSearches(true)

-- 各种filter
winf_ALL = hs.window.filter.new(true)
winf_allWin = hs.window.filter.new():setDefaultFilter({}) -- 包括不可见窗口
winf_allWinNoAlfred = hs.window.filter.new():setDefaultFilter({}):rejectApp("Alfred 3") -- regular windows including hidden and minimized ones
winf_Inv = hs.window.filter.new():setDefaultFilter({ visible = false }) -- 不可见窗口
winf_noInv = hs.window.filter.new() -- 可见窗口

winf_DELL = hs.window.filter.new():setOverrideFilter({ ["allowScreens"] = "U2790B" })
winf_MX27AQ = hs.window.filter.new():setOverrideFilter({ ["allowScreens"] = "MX27AQ" })
winf_COLOR = hs.window.filter.new():setOverrideFilter({ ["allowScreens"] = "Retina" })
winf_twoScreen = hs.window.filter.new():setOverrideFilter({ allowScreens = { "U2790B", "MX27AQ" } })


-- 窗口大小占Full屏幕
local function layoutFull()
    local win = hs.window.focusedWindow() -- 获取当前窗口
    if (win) then
        local f = win:frame() -- 获得当前窗口的 h w x y
        local screen = win:screen() -- 获得当前窗口所在的屏幕
        local f_current = screen:frame() -- 获得当前屏幕的 h w x y

        f.x = f_current.x
        f.y = f_current.y
        f.h = f_current.h
        f.w = f_current.w

        win:setFrame(f)
    end
end

local enlargeOrShrinkScale = 0.95
-- 窗口大小占Full屏幕
local function layoutEnlargeOrShrink(isHorizontal, isEnlarge)
    local win = hs.window.focusedWindow() -- 获取当前窗口
    if (win) then
        local f = win:frame() -- 获得当前窗口的 h w x y
        local screen = win:screen() -- 获得当前窗口所在的屏幕
        local f_current = screen:frame() -- 获得当前屏幕的 h w x y

        -- f.x = f_current.x
        -- f.y = f_current.y
        if (isHorizontal) then
            f.w = isEnlarge and (f.w / enlargeOrShrinkScale) or (f.w * enlargeOrShrinkScale)
        else
            f.h = isEnlarge and (f.h / enlargeOrShrinkScale) or (f.h * enlargeOrShrinkScale)
        end
        win:setFrame(f)
    end
end

function layoutHalf(position)
    local win = hs.window.focusedWindow() -- 获取当前窗口
    if (win) then
        local f = win:frame() -- 获得当前窗口的 h w x y
        local screen = win:screen() -- 获得当前窗口所在的屏幕
        local f_current = screen:frame() -- 获得当前屏幕的 h w x y

        f.y = f_current.y
        f.h = f_current.h
        f.w = f_current.w / 2

        if (position == 'left') then
            f.x = f_current.x
        elseif (position == 'right') then
            f.x = f_current.x + f_current.w / 2
        end

        win:setFrame(f)
    else
        hs.alert.show("没有focused的window4")
    end
end

function layoutMiddleXXX(position)
    local win = hs.window.focusedWindow() -- 获取当前窗口
    if (win) then
        local f = win:frame() -- 获得当前窗口的 h w x y
        local screen = win:screen() -- 获得当前窗口所在的屏幕
        local f_current = screen:frame() -- 获得当前屏幕的 h w x y

        local wScale = 4
        local hScale = 3
        f.x = f_current.x + f_current.w / 2 - f_current.w / wScale / 2
        f.y = f_current.y + f_current.h / 2 - f_current.h / hScale / 2
        f.w = f_current.w / wScale
        f.h = f_current.h / hScale

        win:setFrame(f)
    else
        hs.alert.show("没有focused的window4")
    end
end

function dump(o)
    if type(o) == 'table' then
        local s = '{ '
        for k, v in pairs(o) do
            if type(k) ~= 'number' then k = '"' .. k .. '"' end
            s = s .. '[' .. k .. '] = ' .. dump(v) .. ','
        end
        return s .. '} '
    else
        return tostring(o)
    end
end

function layoutMiddle()
    local W_FACTOR = 50
    local app_chrome = hs.application.find("Code")
    if (app_chrome) then
        local window_chrome = app_chrome:focusedWindow()
        local f = window_chrome:frame() -- 获得当前窗口的 h w x y
        local screen = window_chrome:screen() -- 获得当前窗口所在的屏幕
        local f_current = screen:frame() -- 获得当前屏幕的 h w x y

        local wScale = W_FACTOR / 100
        local hScale = 1
        f.x = f_current.x
        f.y = f_current.y
        f.w = f_current.w * wScale
        f.h = f_current.h * hScale

        window_chrome:setFrame(f)
    else
        hs.alert.show("app_chrome还没启动")
    end

    local app_Code = hs.application.find("Google Chrome Dev")
    if (app_Code) then
        local app_Code = app_Code:focusedWindow()
        local f = app_Code:frame() -- 获得当前窗口的 h w x y
        local screen = app_Code:screen() -- 获得当前窗口所在的屏幕
        local f_current = screen:frame() -- 获得当前屏幕的 h w x y

        local wScale = W_FACTOR / 100
        local hScale = 1
        f.x = f_current.x + (100 - W_FACTOR) / 100 * f_current.w
        f.y = f_current.y
        f.w = f_current.w * wScale
        f.h = f_current.h * hScale

        app_Code:setFrame(f)
    else
        hs.alert.show("app_Code还没启动")
    end
end

local moveScale = 0.5
local movePace = 100
-- 新的函数moveRight
function moveRight()
    local win = hs.window.focusedWindow() -- 获取当前有焦点的窗口
    if (win) then
        local f = win:frame() -- 获得当前窗口的 h w x y
        local f_current = win:screen():frame() -- 当前屏幕的 h w x y

        -- 1.1先判断是否到了当前screen的【右】边界，如果到了【右】边界就转到下面的屏幕
        if (f.x + f.w) == (f_current.x + f_current.w) then
            if (win:screen():toEast(nil, true)) then
                local f_east = win:screen():toEast(nil, true):frame()
                -- 1.2如果窗口【宽度】或【高度】大于后面窗口的，等于后面窗口的
                if (f.w > f_east.w) then f.w = f_east.w end
                if (f.h > f_east.h) then f.h = f_east.h end
                -- 1.3保持窗口【y】坐标与之前screen【上】侧的距离
                f.y = f_east.y + (f.y - f_current.y)
                -- 1.4【x】变为【东边】screen的【左边】（贴近[左]边）
                f.x = f_east.x
                -- 1.5如果移动后的窗口[y+h]大于后面屏幕的[y+h]，那么贴近后面屏幕[底边]进行适应（超出后修正贴近[底]边）
                if (f.y + f.h) > (f_east.y + f_east.h) then
                    f.y = f_east.y + f_east.h - f.h
                end
            end
            -- 2.1如果窗口还没贴近边界，但是在新移动的位置会超出currentScreen的【右】边界，靠边【右】停靠
        elseif (f.x + f.w + movePace) >= (f_current.x + f_current.w) then
            f.x = (f_current.x + f_current.w) - f.w
        else
            -- 3.1如果窗口没有贴近边界，移动后也不会超出，那么向【右】移动一个【f.w】宽
            f.x = f.x + movePace
        end
        win:setFrame(f)
    else
        hs.alert.show("没有focused的window6")
    end
end

-- 新的函数moveLeft
-- 改变后的窗口h如果超过下面的屏幕的h，那么mac会自动执行  f.x=f_后面.x  f.h=f_后面.h
-- 所以不用考虑(f.h > f_后面.h)的情况，只需要考虑(f.y + f.h) > (f_west.y + f_west.h)的情况
function moveLeft()
    local win = hs.window.focusedWindow() -- 获取当前有焦点的窗口
    if (win) then
        local f = win:frame() -- 获得当前窗口的 h w x y
        local f_current = win:screen():frame() -- 当前屏幕的 h w x y
        -- 1.1先判断是否到了当前screen的【左】边界，如果到了【左】边界就转到下面的屏幕
        if (f.x) == (f_current.x) then
            if (win:screen():toWest(nil, true)) then
                local f_west = win:screen():toWest(nil, true):frame()
                -- 1.2如果窗口【宽度】或【高度】大于后面窗口的，等于后面窗口的
                if (f.w > f_west.w) then f.w = f_west.w end
                if (f.h > f_west.h) then f.h = f_west.h end
                -- 1.3保持窗口【y】坐标与之前screen【上】侧的距离
                f.y = f_west.y + (f.y - f_current.y)
                -- 1.4【x】变为【西边】screen的【右边-f.w】（贴近[右]边）
                f.x = (f_west.x + f_west.w) - f.w
                -- 1.5如果移动后的窗口[y+h]大于后面屏幕的[y+h]，那么贴近后面屏幕[底边]进行适应（超出后修正贴近[底]边）
                if (f.y + f.h) > (f_west.y + f_west.h) then
                    f.y = f_west.y + f_west.h - f.h
                end
            end
            -- 2.1如果窗口还没贴近边界，但是在新移动的位置会超出currentScreen的【左】边界，靠【左】边停靠
        elseif (f.x - movePace) <= (f_current.x) then
            f.x = f_current.x
        else
            -- 3.1如果窗口没有贴近边界，移动后也不会超出，那么向【左】移动一个【f.w】距离
            f.x = f.x - movePace
        end
        win:setFrame(f)
    else
        hs.alert.show("没有focused的window7")
    end
end

-- 新的函数moveUp
function moveUp()
    local win = hs.window.focusedWindow() -- 获取当前有焦点的窗口
    if (win) then
        local f = win:frame() -- 获得当前窗口的 h w x y
        local f_current = win:screen():frame() -- 当前屏幕的 h w x y
        -- 1.1先判断是否到了当前screen的【上】边界，如果到了【上】边界就转到下面的屏幕
        if (f.y) == (f_current.y) then
            if (win:screen():toNorth(nil, true)) then
                local f_north = win:screen():toNorth(nil, true):frame()
                -- 1.2如果窗口【宽度】或【高度】大于后面窗口的，等于后面窗口的
                if (f.h > f_north.h) then f.h = f_north.h end
                if (f.w > f_north.w) then f.w = f_north.w end
                -- 1.3保持窗口【x】坐标与之前screen【左】侧的距离
                f.x = f_north.x + (f.x - f_current.x)
                -- 1.4【y】变为【北边】screen的【下边-f.h】（贴近[底]边）
                f.y = (f_north.y + f_north.h) - f.h
                -- 1.5如果移动后的窗口[x+w]大于后面屏幕的[x+w]，那么贴近后面屏幕[右边]进行适应（超出后修正贴近[右]边）
                if (f.x + f.w) > (f_north.x + f_north.w) then
                    f.x = (f_north.x + f_north.w) - f.w
                end
            end
            -- 2.1如果窗口还没贴近边界，但是在新移动的位置会超出currentScreen的【上】边界，那么靠【上】边停靠
        elseif (f.y - movePace) <= (f_current.y) then
            f.y = f_current.y
        else
            -- 3.1如果窗口没有贴近边界，移动后也不会超出，那么向【上】移动一个【f.h】距离
            f.y = f.y - movePace
        end
        win:setFrame(f)
    else
        hs.alert.show("没有focused的window8")
    end
end

-- 新的函数moveDown
function moveDown()
    local win = hs.window.focusedWindow() -- 获取当前有焦点的窗口
    if (win) then
        local f = win:frame() -- 获得当前窗口的 h w x y
        local f_current = win:screen():frame() -- 当前屏幕的 h w x y
        -- 1.1先判断是否到了当前screen的【下】边界，如果到了【下】边界就转到下面的屏幕
        if (f.y + f.h) == (f_current.y + f_current.h) then
            if (win:screen():toSouth(nil, true)) then
                local f_south = win:screen():toSouth(nil, true):frame()
                -- 1.2如果窗口【宽度】或【高度】大于后面窗口的，等于后面窗口的
                if (f.h > f_south.h) then f.h = f_south.h end
                if (f.w > f_south.w) then f.w = f_south.w end
                -- 1.3保持窗口x坐标与之前screen【左】侧的距离
                f.x = f_south.x + (f.x - f_current.x)
                -- 1.4【y】变为【北边】screen的【下边-f.h】（贴近[顶]边）
                f.y = f_south.y
                -- 1.5如果移动后的窗口[x+w]大于后面屏幕的[x+w]，那么贴近后面屏幕[右边]进行适应（超出后修正贴近[右]边）
                if (f.x + f.w) > (f_south.x + f_south.w) then
                    f.x = (f_south.x + f_south.w) - f.w
                end
            end
            -- 2.1如果窗口还没贴近边界，但是如果移动的话会超出currentScreen的【下】边界，那么靠【下】边停靠
        elseif (f.y + f.h + movePace) >= (f_current.y + f_current.h) then
            f.y = f_current.y + f_current.h - f.h
        else
            -- 3.1如果窗口没有贴近边界，移动后也不会超出，那么向【下】移动一个【f.h】距离
            f.y = f.y + movePace
        end
        win:setFrame(f)
    else
        hs.alert.show("没有focused的window9")
    end
end

-- 整齐窗口
function tileOrderlyXXX()
    -- get the focused window
    local win = hs.window.focusedWindow()
    -- get the screen where the focused window is displayed, a.k.a. current screen
    local screen = win:screen()
    local wins = hs.window.filter.defaultCurrentSpace:getWindows()

    hs.window.tiling.tileWindows(wins, screen:frame(), 0.0001, true, false)

    -- for _, screen in pairs(hs.screen.allScreens()) do -- Table iteration.
    --     -- winf_screen = hs.window.filter.new():setDefaultFilter({allowScreens = screen:id()})
    --     winf_screen = hs.window.filter.new():setOverrideFilter({ allowScreens = screen:id() })
    --     local wins = winf_screen:getWindows()
    --     -- 后面两个boolean, 第一个关于次序:getWindows(),按照获得的的list进行排序,依次tile; 第二个关于是否尽量保持个窗口大小之间的比例(但是无关窗口形状,只比对面积的相对大小)
    --     hs.window.tiling.tileWindows(wins, screen:frame(), 0.0001, true, false)
    -- end
end

function tileOrderly()
    local win = hs.window.focusedWindow() -- 获取当前窗口
    local screen = win:screen() -- 获得当前窗口所在的屏幕
    local f_current = screen:frame()

    local app_code = hs.application.find("Code")
    local win1 = app_code:focusedWindow()
    local f1 = win1:frame() -- 获得当前窗口的 h w x y
    f1.w = f_current.w / 2
    f1.h = f_current.h
    f1.x = f_current.x
    f1.y = f_current.y
    win1:setFrame(f1)

    local app_code = hs.application.find("Google Chrome")
    local win2 = app_code:focusedWindow()
    local f2 = win2:frame() -- 获得当前窗口的 h w x y
    f2.w = f_current.w / 2
    f2.x = f_current.x + f_current.w / 2
    f2.y = f_current.y
    f2.y = f_current.y
    win2:setFrame(f2)
end

function moveTo(position)
    local win = hs.window.focusedWindow() -- 获取当前窗口
    if (win) then
        local screen = win:screen() -- 获得当前窗口所在的屏幕
        local f_current = screen:frame() -- 获得当前屏幕的 h w x y

        if (position == 'leftLeft') then
            local app_code = hs.application.find("Google Chrome")
            local win = app_code:focusedWindow()
            local f = win:frame() -- 获得当前窗口的 h w x y
            f.w = f.w * 0.95
            f.x = f_current.x
            win:setFrame(f)
        elseif (position == 'leftRight') then
            local app_code = hs.application.find("Google Chrome")
            local win = app_code:focusedWindow()
            local f = win:frame() -- 获得当前窗口的 h w x y
            f.w = f.w * 1.05
            f.x = f_current.x
            win:setFrame(f)
        elseif (position == 'rightLeft') then
            local app_code = hs.application.find("Code")
            local win = app_code:focusedWindow()
            local f = win:frame() -- 获得当前窗口的 h w x y
            f.w = f.w * 1.05
            f.x = f_current.x + f_current.w - f.w
            win:setFrame(f)
        elseif (position == 'rightRight') then
            local app_code = hs.application.find("Code")
            local win = app_code:focusedWindow()
            local f = win:frame() -- 获得当前窗口的 h w x y
            f.w = f.w * 0.95
            f.x = f_current.x + f_current.w - f.w
            win:setFrame(f)

        end

    else
        hs.alert.show("没有focused的window4")
    end
end

-- codeUp
function codeUp()
    try
    {
        -- try 代码块
        function()
            local app_code = hs.application.find("Code")
            local window_code = app_code:focusedWindow()
            local screen_code = window_code:screen()
            local screen_4k = hs.screen.find("U2790B")


            local app_chrome = hs.application.find("Google Chrome")
            local window_chrome = app_chrome:focusedWindow()
            local screen_apple = hs.screen.find('Retina')

            window_chrome:focus()
            window_code:focus()
            -- codeUp
            if (screen_code:name() == 'Retina') then
                window_code:moveToScreen(screen_4k)
                window_code:maximize()

                window_chrome:moveToScreen(screen_apple)
                window_chrome:maximize()
            else
                window_code:moveToScreen(screen_apple)
                window_code:maximize()

                window_chrome:moveToScreen(screen_4k)
                window_chrome:maximize()
            end
        end,
        -- catch 代码块
        catch
        {
            -- 发生异常后，被执行
            function(errors)
                print('11111111e: ', errors)
            end
        }
    }
end

-- ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
-- ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

function myBind(mods, key, func, ...)
    local function myFunc()
        func()
        local msg = ""
        for index, value in pairs(mods) do
            msg = msg .. value .. " "
        end
        msg = msg .. key
        -- hs.alert.show(tostring(msg))
    end

    hs.hotkey.bind(mods, key, myFunc, ...)
end

-- myBind(1, 3, 5, 7, 89898989)

-- 特殊
myBind({ "ctrl", "shift" }, "N", function() moveTo('leftLeft') end, nil, function() moveTo('leftLeft') end) -- 左
myBind({ "ctrl", "shift" }, "M", function() moveTo('leftRight') end, nil, function() moveTo('leftRight') end) -- 下
myBind({ "ctrl", "shift" }, ",", function() moveTo('rightLeft') end, nil, function() moveTo('rightLeft') end) -- 上
-- myBind({ "ctrl", "shift" }, ",", layoutFull) -- 上
myBind({ "ctrl", "shift" }, ".", function() moveTo('rightRight') end, nil, function() moveTo('rightRight') end) -- 右


-- -- 切换窗口
myBind({ "ctrl", "shift" }, "J", function() hs.window.filter.focusWest() end, nil,
    function() hs.window.filter.focusWest() end) -- 左
myBind({ "ctrl", "shift" }, "U", layoutMiddle) -- 下
myBind({ "ctrl", "shift" }, "Y", layoutFull) -- 下
-- myBind({"ctrl", "shift"}, "I", function() hs.window.filter.focusNorth() end, nil, function() hs.window.filter.focusNorth() end) -- 上
myBind({ "ctrl", "shift" }, "K", function() hs.window.filter.focusEast() end, nil,
    function() hs.window.filter.focusEast() end) -- 右

-- 移动窗口
myBind({ "ctrl" }, "H", moveLeft, nil, moveLeft)
myBind({ "ctrl" }, "J", moveDown, nil, moveDown)
myBind({ "ctrl" }, "K", moveUp, nil, moveUp)
myBind({ "ctrl" }, "L", moveRight, nil, moveRight)

-- 顺序排列当前屏幕窗口(调用hyper3用到的tile函数,不过只是tile当前的屏幕)
myBind({ "ctrl", "shift" }, ";", tileOrderly) -- f5

-- 调节窗口大小
-- myBind({ "ctrl", "shift" }, "N", function() layoutEnlargeOrShrink(true, false) end, nil, function() layoutEnlargeOrShrink(true, false) end) -- 向左变小
-- myBind({ "ctrl", "shift" }, "M", function() layoutEnlargeOrShrink(false, true) end, nil, function() layoutEnlargeOrShrink(false, true) end) -- 向下变大
-- myBind({ "ctrl", "shift" }, ",", function() layoutEnlargeOrShrink(false, false) end, nil, function() layoutEnlargeOrShrink(false, false) end) -- 向上变小
-- myBind({ "ctrl", "shift" }, ".", function() layoutEnlargeOrShrink(true, true) end, nil, function() layoutEnlargeOrShrink(true, true) end) -- 向右变大

-- codeUp
-- myBind({"ctrl", "shift"}, "T", codeUp)

-- -- 窗口都最小
myBind({ "ctrl" }, "/", function() -- cmd+左
    for _, wins in ipairs(winf_noInv:getWindows()) do
        wins:minimize()
    end
end)
-- -- 窗口都恢复
myBind({ "ctrl" }, "'", function() -- cmd 左
    local list = hs.window.filter.new():setDefaultFilter({ visible = false }):setAppFilter("Hammerspoon", {}):getWindows()
    hs.alert.show(#list)

    -- hammerspoon这个app比较特殊, 在default里面已经设置过, 现在将他设置为Hammerspoon = {},
    for _, window in ipairs(list) do
        window:unminimize()
    end
end)




-- ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
function try(block)

    -- get the try function
    local try = block[1]
    assert(try)

    -- get catch and finally functions
    local funcs = block[2]
    if funcs and block[3] then
        table.join2(funcs, block[2])
    end

    -- try to call it
    local ok, errors = pcall(try)
    if not ok then

        -- run the catch function
        if funcs and funcs.catch then
            funcs.catch(errors)
        end
    end

    -- run the finally function
    if funcs and funcs.finally then
        funcs.finally(ok, errors)
    end

    -- ok?
    if ok then
        return errors
    end
end

-- catch
function catch(block)

    -- get the catch block function
    return { catch = block[1] }
end

winf_noInv:subscribe(hs.window.filter.windowMinimized, function(win, appName, event)
    -- 获得当前app的filter,不包括不可见窗口
    app_winf = hs.window.filter.new(false):setAppFilter(appName, { visible = true })

    if (#app_winf:getWindows() == 0)
    then
        winf_noInv:getWindows(hs.window.filter.sortByFocusedLast)[1]:focus()
    end
end, true)
winf_allWinNoAlfred:subscribe(hs.window.filter.windowDestroyed, function(win, appName, event)
    -- 获得当前app的filter,不包括不可见窗口
    app_winf = hs.window.filter.new(false):setAppFilter(appName, { visible = true })

    if #app_winf:getWindows() == 0
    then
        winf_noInv:getWindows(hs.window.filter.sortByFocusedLast)[1]:focus()
    end
end, true)
-- ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss


myBind({ "ctrl", "shift" }, "V", function() hs.application.open("/Applications/Visual Studio Code.app") end)
myBind({ "ctrl", "shift" }, "C", function() hs.application.open("/Applications/Google Chrome Dev.app") end)
myBind({ "ctrl", "shift" }, "P", function()
    hs.applescript(
        [[ tell application "System Preferences"
        reopen
        activate
        end tell ]]
    )
end)
myBind({ "ctrl", "shift" }, "R", function()
    hs.applescript(
        [[ tell application "iTerm"
            reopen
            activate
        end tell
        ]]
    )
end)


myBind({ "ctrl", "shift" }, "H", function() hs.eventtap.keyStroke({ "cmd", "alt" }, "left") end)
myBind({ "ctrl", "shift" }, "L", function() hs.eventtap.keyStroke({ "cmd", "alt" }, "right") end)
myBind({}, "f14", function()
    hs.eventtap.keyStroke({ "ctrl", "shift" }, "F")
    -- hs.application.open("/Applications/Google Chrome.app")
end)




hs.alert.show("Config reloaded")
function test()
    hs.reload()
end

-- test
myBind({ "ctrl" }, "R", test)
